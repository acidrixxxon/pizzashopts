import React from 'react'
import DeliveryIcon from '../../Icons/DeliveryIcon'
import DineInIcon from '../../Icons/DineinIcon'
import ClientDataForm from '../ClientDataForm/ClientDataForm'
import './_OrderForm.scss'

const OrderForm:React.FC = () => {
  const [ orderType,setOrderType ] = React.useState<number>(0)

    return (
      <div id="orderform">
        <h4 className="orderform__title">Оформлення замовлення</h4>

        <div className="orderform__ordertype">
          <button className={orderType === 0 ? 'orderform__ordertypeBtn active' : 'orderform__ordertypeBtn'}>
            <DeliveryIcon />
            Доставка
          </button>
          <button className={orderType === 1 ? 'orderform__ordertypeBtn active' : 'orderform__ordertypeBtn'}>
            <DineInIcon />
            З собою
          </button>
        </div>

        <form className="orderform__form">
          <ClientDataForm />
        </form>
      </div>
    )
}

export default OrderForm