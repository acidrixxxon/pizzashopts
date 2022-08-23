import React from 'react'
import PaymentType from '../../PaymentType/PaymentType'
import './_DeliveryOrderForm.scss'

const DeliveryOrderForm = () => {

    return (
        <div id="deliveryform">
            <h4 className="deliveryform__title">Адреса</h4>

            <input type="text" className="deliveryform__input" placeholder='Вулиця'/>

            <div className="deliveryform__inputGroup">
                <input type="text" className="deliveryform__input" placeholder='Будинок'/>
                <input type="text" className="deliveryform__input" placeholder='Телефон'/>
                <input type="text" className="deliveryform__input" placeholder='Email'/>
            </div>

            <div className="deliveryform__comment">
                <textarea className="deliveryform__textarea" placeholder='Коментар для курьера'></textarea>
            </div>

            <PaymentType />
        </div>
    )
}

export default DeliveryOrderForm