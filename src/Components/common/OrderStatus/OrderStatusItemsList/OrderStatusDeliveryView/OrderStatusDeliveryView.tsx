import React from 'react';

import './_OrderStatusDeliveryView.scss';

const OrderStatusDeliveryView: React.FC = () => {
  return (
    <div id='OrderStatusDeliveryItem'>
      <div className='deliveryItem__image'>
        <img src='https://media.dominos.ua/__sized__/menu/product_osg_image/2022/04/29/delivery-thumbnail-2300x2300.png' alt='' />
      </div>

      <div className='deliveryItem__data'>
        <h4 className='deliveryItem__title'>Доставка</h4>

        <span className='deliveryItem__price'>40 грн.</span>
      </div>
    </div>
  );
};

export default OrderStatusDeliveryView;
