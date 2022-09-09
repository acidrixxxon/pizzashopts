import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../../Context'
import { NewOrderDto } from '../../../../Dto/CartDto'
import { validateFields } from '../../../../Utils/Validation'
import DeliveryIcon from '../../Icons/DeliveryIcon'
import DineInIcon from '../../Icons/DineinIcon'
import ClientDataForm from '../ClientDataForm/ClientDataForm'
import DeliveryOrderForm from '../DeliveryOrderForm/DeliveryOrderForm'
import DineinOrderForm from '../DineinOrderForm/DineinOrderForm'
import './_OrderForm.scss'

const OrderForm:React.FC = () => {
  const { state: { cart,customerData },dispatch,actions: { clearCart,setFieldError }} = React.useContext(Context)

  const navigate = useNavigate()

  const setOrderTypeHandler = (type: number): void =>  {
    dispatch({ type: 'SET_PAYMENT_TYPE', payload: null})
    dispatch({type: 'SET_CUSTOMER_DATA',payload: {
      target: {
        name: 'orderType',
        value: type
      }
    }})
  }

  const createOrderHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    const { errors,result } = validateFields(customerData)

    if (result) {
      // const newOrder = new NewOrderDto(cart,customerData)

      clearCart()
      navigate('/order-status/sf3sf3')
    } else {
      setFieldError(errors)
    }
  }

    return (
      <div id="orderform">
        <h4 className="orderform__title">Оформлення замовлення</h4>

        <div className="orderform__ordertype">
          <button 
            onClick={() => setOrderTypeHandler(0)}
            className={customerData.orderType === 0 ? 'orderform__ordertypeBtn active' : 'orderform__ordertypeBtn'}>
              <DeliveryIcon />
              Доставка
          </button>
          <button 
            onClick={() => setOrderTypeHandler(1)}
            className={customerData.orderType === 1 ? 'orderform__ordertypeBtn active' : 'orderform__ordertypeBtn'}>
              <DineInIcon />
               собою
          </button>
        </div>

        <form className="orderform__form">
          <ClientDataForm />

          {customerData.orderType === 0 && <DeliveryOrderForm />}
          {customerData.orderType === 1 && <DineinOrderForm />}

          <div className="orderform__totals">
            <h4 className="orderform__totalsTitle">
              Усьго
            </h4>

            <div className="orderform__cost">
              <span className="orderform__costNumber">{cart.totalCost < 300 && cart.totalItems > 0 ? cart.totalCost + 40 : cart.totalCost}.00</span>
              <span className="orderform__costText">грн</span>
            </div>

            <button className='orderform__confirm' onClick={(e) => createOrderHandler(e)}>Замовити</button>
          </div>
        </form>
      </div>
    )
}

export default OrderForm