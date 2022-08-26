import React from 'react'
import { Context } from '../../../../Context'
import PaymentType from '../../PaymentType/PaymentType'
import './_DeliveryOrderForm.scss'

const DeliveryOrderForm = () => {
    const { dispatch,state } = React.useContext(Context)
    console.log(state)
    
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        dispatch({type: 'SET_CUSTOMER_DATA',payload: e})
    }

    return (
        <div id="deliveryform">
            <h4 className="deliveryform__title">Адреса</h4>

            <input type="text" className="deliveryform__input" placeholder='Вулиця' name="street" onChange={(e) => inputChangeHandler(e)}/>

            <div className="deliveryform__inputGroup">
                <input type="text" className="deliveryform__input" placeholder='Будинок' name="house" onChange={(e) => inputChangeHandler(e)} />
                <input type="text" className="deliveryform__input" placeholder='Квартира' name="room" onChange={(e) => inputChangeHandler(e)}/>
                <input type="text" className="deliveryform__input" placeholder='Поверх' name="floor"  onChange={(e) => inputChangeHandler(e)}/>
            </div>

            <div className="deliveryform__comment">
                <textarea className="deliveryform__textarea" placeholder='Коментар для курьера' name="comment"  onChange={(e) => inputChangeHandler(e)}></textarea>
            </div>

            <PaymentType />
        </div>
    )
}

export default DeliveryOrderForm