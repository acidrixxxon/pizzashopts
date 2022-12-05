import React from 'react'

import { IPizzaInCart } from '../../../../../types'
import './_OrderStatusPizzaView.scss'


interface ComponentProps {
  item: IPizzaInCart
}

const OrderStatusPizzaView:React.FC<ComponentProps> = ({ item }) => {
  return (
    <div className="order__item">
      <div className="order__imageContainer">
        <img src={item.imageUrl} alt="orderImage" />
      </div>

      <div className="order__data">
        <div className="order__itemHeader">
          <div>
            <h4 className="order__itemTitle">{item.fulltitle}</h4>
          </div>

        <span className="order__itemPrice">{item.price} грн.</span>
        </div>

        {item.ingridients && 
          <div className="order__itemFooter">
            <p>{item.ingridients.map((ingridient,index: number) => {
              return (
                `${index === 0 ? ingridient.ingridientId.title : ingridient.ingridientId.title.toLowerCase()}${item.ingridients !== undefined && index + 1 !== item.ingridients.length ? ', ' : ''}`
              )
            })}</p>
          </div>}
      </div>
    </div>
  )
}

export default OrderStatusPizzaView