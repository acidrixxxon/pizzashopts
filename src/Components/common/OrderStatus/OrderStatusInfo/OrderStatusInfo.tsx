import './_OrderStatusInfo.scss';

import { IOrderDetails } from '../../../../types/OrderTypes';
import React from 'react';

interface ComponentProps {
  data: IOrderDetails | undefined;
}

const OrderStatusInfo: React.FC<ComponentProps> = ({ data }) => {
  return (
    <div className='order__info'>
      <div className='order__infoGroup'>
        <h4 className='order__infoGroupTitle'>Контакти</h4>

        <div className='order__infoGroupRow'>
          <span className='order__infoGroupField'>Имя:</span>
          <span className='order__infoGroupData'>{data?.customerData.name}</span>
        </div>

        <div className='order__infoGroupRow'>
          <span className='order__infoGroupField'>Email:</span>
          <span className='order__infoGroupData'>{data?.customerData.email}</span>
        </div>

        <div className='order__infoGroupRow'>
          <span className='order__infoGroupField'>Телефон:</span>
          <span className='order__infoGroupData'>{data?.customerData.phone}</span>
        </div>
      </div>

      <div className='order__infoGroup'>
        <h4 className='order__infoGroupTitle'>Адрес</h4>

        <div className='order__infoGroupRow'>
          <span className='order__infoGroupField'>Тип обслуживания:</span>
          <span className='order__infoGroupData'>Доставка</span>
        </div>

        <div className='order__infoGroupRow'>
          <span className='order__infoGroupField'>Адрес:</span>
          <span className='order__infoGroupData'>
            Київ,
            {` ${data?.customerData.street}`},{` ${data?.customerData.house}`},
            {data?.customerData.floor ? ` ${data?.customerData.floor} поверх` : null},
            {data?.customerData.room ? ` ${data?.customerData.room} квартира` : null}
          </span>
        </div>

        <div className='order__infoGroupRow'>
          <span className='order__infoGroupField'>Время доставки:</span>
          <span className='order__infoGroupData'>5 сентября 2022 г., 23:20</span>
        </div>
      </div>

      <div className='order__infoGroup payment'>
        <h4 className='order__infoGroupTitle'>Способ оплаты</h4>

        <div className='order__infoGroupRow'>
          <span>{data?.paymentType.title}</span>
        </div>
      </div>

      <div className='order__infoGroup comment'>
        <h4 className='order__infoGroupTitle'>Коментар для кур&apos;єра</h4>

        <div className='order__infoGroupRow'>
          <span>{data?.customerData.comment ? data?.customerData.comment : 'Коментар відсутній'}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusInfo;
