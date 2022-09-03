import React from 'react'
import { Context } from '../../../../Context'
import { initialStateType, IOrderObj } from '../../../../types'
import DeliveryIcon from '../../Icons/DeliveryIcon'
import DineInIcon from '../../Icons/DineinIcon'
import ClientDataForm from '../ClientDataForm/ClientDataForm'
import DeliveryOrderForm from '../DeliveryOrderForm/DeliveryOrderForm'
import DineinOrderForm from '../DineinOrderForm/DineinOrderForm'
import './_OrderForm.scss'

const OrderForm:React.FC = () => {
  const { state: { cart,customerData },dispatch} = React.useContext(Context)

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

    if (customerData.orderType === 0) {
      const orderObj:IOrderObj= {
        ...cart,
        customerData: {
          name: customerData.name,
          phone: customerData.phone,
          email: customerData.email,
          orderType: customerData.orderType,
          street: customerData.street,
          house: customerData.house,
          room: customerData.room,
          floor: customerData.floor,
          comment: customerData.comment
        }
      }
      console.log(orderObj)
    } else {
        const orderObj = {

        }
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