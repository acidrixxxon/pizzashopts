import React from 'react'
import { Context } from '../../../../Context'
import Error from '../../Error/Error'
import PaymentType from '../../PaymentType/PaymentType'
import './_DeliveryOrderForm.scss'

const DeliveryOrderForm = () => {
    const { state: { customerData: { errors }},actions: { setCustomerData },state: { customerData } } = React.useContext(Context)
    
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setCustomerData(e)
    }

    return (
        <div id="deliveryform">
            <h4 className="deliveryform__title">Адреса</h4>

            <div className="deliveryform__inputField form__field">
                <input type="text" value={customerData.street} className={errors.street !== null ? "deliveryform__input form__input not__valid" : "deliveryform__input form__input"} placeholder='Вулиця' name="street" onChange={(e) => inputChangeHandler(e)}/>
                <Error className='deliveryform__inputError' value={errors.street}/>
            </div>

            <div className="deliveryform__inputGroup">
                <div className="deliveryform__inputField form__field">
                    <input type="text" value={customerData.house} className={errors.house !== null ? "deliveryform__input form__input not__valid" : "deliveryform__input form__input"} placeholder='Будинок' name="house" onChange={(e) => inputChangeHandler(e)} />
                    <Error className='deliveryform__inputError' value={errors.house}/>
                </div>

                <div className="deliveryform__inputField form__field">
                    <input type="text" value={customerData.room} className="deliveryform__input form__input" placeholder='Квартира' name="room" onChange={(e) => inputChangeHandler(e)}/>
                </div>

                <div className="deliveryform__inputField form__field">
                    <input type="text" value={customerData.floor} className="deliveryform__input form__input" placeholder='Поверх' name="floor"  onChange={(e) => inputChangeHandler(e)}/>
                </div>
            </div>

            <div className="deliveryform__comment">
                <textarea className="deliveryform__textarea" placeholder='Коментар для курьера' name="comment"  onChange={(e) => inputChangeHandler(e)}></textarea>
            </div>

            <PaymentType />
        </div>
    )
}

export default DeliveryOrderForm