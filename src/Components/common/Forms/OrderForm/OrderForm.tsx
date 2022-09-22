import { AnimatePresence,motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Context1 } from '../../../../Context/Context'
import LocalStorageService from '../../../../Services/LocalStorageService'
import { initialCustomerDataErrors } from '../../../../Utils/initialStore'
import { validateFields } from '../../../../Utils/Validation'
import DeliveryIcon from '../../Icons/DeliveryIcon'
import DineInIcon from '../../Icons/DineinIcon'
import ClientDataForm from '../ClientDataForm/ClientDataForm'
import DeliveryOrderForm from '../DeliveryOrderForm/DeliveryOrderForm'
import DineinOrderForm from '../DineinOrderForm/DineinOrderForm'
import './_OrderForm.scss'

const OrderForm:React.FC = () => {
  const { actions: { setCustomerData },state: { customerData,cart },actions: { clearCart,setFieldError }} = React.useContext(Context1)
  console.log(customerData)
  const navigate = useNavigate()

  const setOrderTypeHandler = (type: number): void =>  {
    setCustomerData({target: { name: 'orderType',value: type}})
    setCustomerData({ target: { name: 'paymentType',value: null}})
    setFieldError(initialCustomerDataErrors)
  }

  const createOrderHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if(customerData.paymentType !== undefined) {
      const { errors,result } = validateFields(customerData,customerData.paymentType)

      if (result) {
        // const newOrder = new NewOrderDto(cart,customerData)
  
        LocalStorageService.saveCustomerData(customerData,customerData.paymentType)
        clearCart()
        navigate('/order-status/sf3sf3')
      } else {
        setFieldError(errors)
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
               З собою
          </button>
        </div>

        <form className="orderform__form">
          <ClientDataForm />

          {customerData.orderType === 0 && 
            <AnimatePresence>
              <motion.form                 
                initial={{opacity: 0,height: '0'}}
                animate={{opacity: 1,height: 'auto'}}
                exit={{opacity: 0,height: '0'}}>
                <DeliveryOrderForm />
              </motion.form>
            </AnimatePresence>
          }

          {/* {customerData.orderType === 1 && 
            <AnimatePresence>
              <motion.form                 
                initial={{opacity: 0, height: '0'}}
                animate={{opacity: 1,height: 'auto'}}
                exit={{opacity: 0,height: '0'}}>
                <DineinOrderForm />
              </motion.form>
            </AnimatePresence>
          } */}

          <div className="orderform__totals">
            <h4 className="orderform__totalsTitle">
              Усьго
            </h4>

            <div className="orderform__cost">
              <span className="orderform__costNumber">{cart.totalCost < 300 && cart.totalItems > 0 && cart.items.length > 0? cart.totalCost + 40 : cart.totalCost}.00</span>
              <span className="orderform__costText">грн</span>
            </div>

            <button className={cart.items.length === 0 ? 'orderform__confirm disabled' : 'orderform__confirm'} onClick={(e) => createOrderHandler(e)} disabled={cart.items.length === 0}>Замовити</button>
          </div>
        </form>
      </div>
    )
}

export default OrderForm