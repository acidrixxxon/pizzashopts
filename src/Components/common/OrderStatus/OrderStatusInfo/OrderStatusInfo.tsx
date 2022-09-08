import React from 'react'
import './_OrderStatusInfo.scss'

const OrderStatusInfo:React.FC = () => {
  return (
    <div className="order__info">
        <div className="order__infoGroup">
          <h4 className="order__infoGroupTitle">Контакти</h4>

          <div className="order__infoGroupRow">
              <span className='order__infoGroupField'>Имя:</span>
              <span className='order__infoGroupData'>Антон</span>
          </div>

          <div className="order__infoGroupRow">
              <span className='order__infoGroupField'>Email:</span>
              <span className='order__infoGroupData'>maslov@rambler.ru </span>
          </div>

          <div className="order__infoGroupRow">
              <span className='order__infoGroupField'>Телефон:</span>
              <span className='order__infoGroupData'>+7(800)343-04-34</span>
          </div>
        </div>

        <div className="order__infoGroup">
          <h4 className="order__infoGroupTitle">Адрес</h4>

          <div className="order__infoGroupRow">
              <span className='order__infoGroupField'>Тип обслуживания:</span>
              <span className='order__infoGroupData'>Доставка</span>
          </div>

          <div className="order__infoGroupRow">
              <span className='order__infoGroupField'>Адрес:</span>
              <span className='order__infoGroupData'>Москва, Новомосковская улица, 15Ас1  </span>
          </div>

          <div className="order__infoGroupRow">
              <span className='order__infoGroupField'>Время доставки:</span>
              <span className='order__infoGroupData'>5 сентября 2022 г., 23:20</span>
          </div>
        </div>

        <div className="order__infoGroup payment">
          <h4 className="order__infoGroupTitle">Способ оплаты</h4>

          <div className="order__infoGroupRow">
            <span>Готівка</span>
          </div>
        </div>

        <div className="order__infoGroup comment">
          <h4 className="order__infoGroupTitle">Коментар для кур'єра</h4>

          <div className="order__infoGroupRow">
            <span>Заберу біля под'їзду, подзвоніть по прибуттю</span>
          </div>
        </div>
    </div>
  )
}

export default OrderStatusInfo