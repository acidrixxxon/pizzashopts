import React from 'react'
import { Context } from '../../../../Context'
import PaymentType from '../../PaymentType/PaymentType'
import './_DeliveryOrderForm.scss'

const DeliveryOrderForm = () => {
    const { dispatch,state: { customerData: { errors }} } = React.useContext(Context)
    
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        dispatch({type: 'SET_CUSTOMER_DATA',payload: e})
    }

    return (
        <div id="deliveryform">
            <h4 className="deliveryform__title">Адреса</h4>

            <div className="deliveryform__inputField form__field">
                <input type="text" className={errors.street !== null ? "deliveryform__input form__input not__valid" : "deliveryform__input form__input"} placeholder='Вулиця' name="street" onChange={(e) => inputChangeHandler(e)}/>
                {errors.street !== null && <span className='deliveryform__inputError input__error'>{errors.street[0]}</span>}
            </div>

            <div className="deliveryform__inputGroup">
                <div className="deliveryform__inputField form__field">
                    <input type="text" className={errors.house !== null ? "deliveryform__input form__input not__valid" : "deliveryform__input form__input"} placeholder='Будинок' name="house" onChange={(e) => inputChangeHandler(e)} />
                    {errors.house !== null && <span className='deliveryform__inputError input__error'>{errors.house[0]}</span>}
                </div>

                <div className="deliveryform__inputField form__field">
                    <input type="text" className="deliveryform__input form__input" placeholder='Квартира' name="room" onChange={(e) => inputChangeHandler(e)}/>
                </div>

                <div className="deliveryform__inputField form__field">
                    <input type="text" className="deliveryform__input form__input" placeholder='Поверх' name="floor"  onChange={(e) => inputChangeHandler(e)}/>
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