import React from 'react'
import { ISideInCart } from '../../../../../types'

interface ComponentProps {
  item: ISideInCart
}

const OrderStatusSideView:React.FC<ComponentProps> = ({ item }) => {

  return (
    <div className="order__item">
      <div className="order__imageContainer">
        <img src={item.imageUrl} alt="orderImage" />
      </div>

      <div className="order__data">
        <div className="order__itemHeader">
          <div>
            <h4 className="order__itemTitle">{item.title}</h4>
          </div>

          <span className="order__itemPrice">{item.price} грн.</span>
        </div>
      </div>
    </div>
  )
}

export default OrderStatusSideView