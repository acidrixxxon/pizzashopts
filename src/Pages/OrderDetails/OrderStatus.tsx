import React from 'react'
import { useParams } from 'react-router-dom'

import Container from '../../Components/common/Container/Container'
import Spinner from '../../Components/common/Icons/Spinner/Spinner'
import OrderStatusInfo from '../../Components/common/OrderStatus/OrderStatusInfo/OrderStatusInfo'
import OrderStatusItemsList from '../../Components/common/OrderStatus/OrderStatusItemsList/OrderStatusItemsList'
import OrderStatusStage from '../../Components/common/OrderStatus/OrderStatusStage/OrderStatusStage'
import OrderService from '../../Services/OrderService'
import { IIngridients1 } from '../../types'
import { IGetOrderByIdResponse, IGetOrderByIdResponseWithError, INewOrder, IOrderFromServer } from '../../types/OrderTypes'
import './_OrderStatus.scss'

const OrderStatus:React.FC = () => {
  const [ order,setOrder ] = React.useState<IOrderFromServer | null>(null)
  const [ loading,setLoading ] = React.useState<boolean>(true)

  const { id } = useParams()

  console.log(order?.cart.items)

  React.useEffect(() => {
    const fetchOrderData = async () => {
      if (id !== undefined) {
        setLoading(true)
        const data:IGetOrderByIdResponse | IGetOrderByIdResponseWithError = await OrderService.getOrderById(id)
  
        if(data.success === true && data.order !== undefined) {
          setOrder(data.order)
          setLoading(false)
        }
      }
    }

    fetchOrderData()
  },[])


  return (
    <div id="order">
        <Container>
            {loading === true && order === null ? <Spinner className='orderStatus__spinner'/> :
            <>
              <h4 className="order__title">
                Статус замовлення
              </h4>

              <div className="order__content">
                <div className="order__heading">
                  Замовлення  № 2022-09-05#65, 5 вересня 2022 г., 22:50
                </div>

                <div className="order__main">
                  <OrderStatusStage status={order?.status.id}/>
                  <OrderStatusInfo data={order?.details} />
                </div>
              </div>

              <div className="order__footer">
                  <div className="order__title">
                    Информация о заказе
                  </div>

                  <OrderStatusItemsList items={order?.cart.items}/>

                  <div className="order__totals">
                    <p>Итого: <span>{order?.cart.totalCost}</span> грн.</p>
                  </div>
                </div>
            </>}
          
        </Container>
    </div>
  )
}

export default OrderStatus
