import React from 'react'
import { Context } from '../../../../Context'
import DeliveryIcon from '../../Icons/DeliveryIcon'
import DineInIcon from '../../Icons/DineinIcon'
import ClientDataForm from '../ClientDataForm/ClientDataForm'
import DeliveryOrderForm from '../DeliveryOrderForm/DeliveryOrderForm'
import DineinOrderForm from '../DineinOrderForm/DineinOrderForm'
import './_OrderForm.scss'

const OrderForm:React.FC = () => {
  const [ orderType,setOrderType ] = React.useState<number>(0)

  const { state: { cart }} = React.useContext(Context)

    return (
      <div id="orderform">
        <h4 className="orderform__title">Оформлення замовлення</h4>

        <div className="orderform__ordertype">
          <button 
            onClick={() => setOrderType(0)}
            className={orderType === 0 ? 'orderform__ordertypeBtn active' : 'orderform__ordertypeBtn'}>
              <DeliveryIcon />
              Доставка
          </button>
          <button 
            onClick={() => setOrderType(1)}
            className={orderType === 1 ? 'orderform__ordertypeBtn active' : 'orderform__ordertypeBtn'}>
              <DineInIcon />
               собою
          </button>
        </div>

        <form className="orderform__form">
          <ClientDataForm />

          {orderType === 0 && <DeliveryOrderForm />}
          {orderType === 1 && <DineinOrderForm />}

          <div className="orderform__totals">
            <h4 className="orderform__totalsTitle">
              Усьго
            </h4>

            <div className="orderform__cost">
              <span className="orderform__costNumber">{cart.totalCost}.00</span>
              <span className="orderform__costText">грн</span>
            </div>

            <button className='orderform__confirm'>Замовити</button>
          </div>
        </form>
      </div>
    )
}

export default OrderForm