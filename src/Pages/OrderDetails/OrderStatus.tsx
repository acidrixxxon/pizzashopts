import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../Components/common/Container/Container'
import Spinner from '../../Components/common/Icons/Spinner/Spinner'
import OrderStatusInfo from '../../Components/common/OrderStatus/OrderStatusInfo/OrderStatusInfo'
import OrderStatusStage from '../../Components/common/OrderStatus/OrderStatusStage/OrderStatusStage'
import OrderService from '../../Services/OrderService'
import { IIngridients1 } from '../../types'
import { IGetOrderByIdResponse, IGetOrderByIdResponseWithError, INewOrder, IOrderFromServer } from '../../types/OrderTypes'
import './_OrderStatus.scss'

const OrderStatus:React.FC = () => {
  const [ order,setOrder ] = React.useState<IOrderFromServer | null>(null)
  const [ loading,setLoading ] = React.useState<boolean>(true)

  const { id } = useParams()

  

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

                  <div className="order__itemsList">
                    {order?.cart.items.map((item) => {
                      return (
                        <div className="order__item">
                          <div className="order__imageContainer">
                            <img src={item.imageUrl} alt="orderImage" />
                          </div>
    
                          <div className="order__data">
                            <div className="order__itemHeader">
                              <div>
                                <h4 className="order__itemTitle">{item.class === 0 ? item.fulltitle : item.title}{item.class !== 0 && `(${item.size})`}</h4>
                              </div>
    
                            <span className="order__itemPrice">{item.price} грн.</span>
                          </div>
  
                          {item.ingridients && 
                            <div className="order__itemFooter">
                              <p>{item.ingridients.map((ingridient,index: number) => {
                                return (
                                  `${ingridient.ingridientId.title} ${item.ingridients !== undefined && index + 1 !== item.ingridients.length ? ', ' : ''}`
                                )
                              })}</p>
                            </div>}
                        </div>
                      </div>
                      )
                    })}
                  </div>

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
