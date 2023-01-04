import React from 'react'

import './_DeliveryItem.scss'

const DeliveryItem = () => {
  return (
        <li id="deliveryItem">
            <div className="deliveryItem__image">
                <img src="https://media.dominos.ua/__sized__/menu/product_osg_image/2022/04/29/delivery-thumbnail-2300x2300.png" alt="title" className="deliveryItem__img" />
            </div>

            <div className="deliveryItem__description">
                <div className="deliveryItem__header">
                    <span className="deliveryItem__title">
                        Доставка
                    </span>
                </div>

                <div className="deliveryItem__footer">
                    <div className="deliveryItem__priceBlock">
                        <span className="deliveryItem__price">40.00</span>
                        <span className="deliveryItem__currency">грн</span>
                    </div>
                </div>
            </div>
        </li>
  )
}

export default DeliveryItem