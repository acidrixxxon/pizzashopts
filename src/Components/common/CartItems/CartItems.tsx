import React from 'react'
import { Context1 } from '../../../Context/Context'
import CartItemComponent from './CartItemComponent/CartItemComponent'
import DeliveryItem from './DeliveryItem/DeliveryItem'
import './_CartItems.scss'

const CartItems = () => {
  const { state: { cart },actions: { clearCart }} = React.useContext(Context1)

    return (
      <div id="cartitems">
        <h4 className="cartitems__title">Ваше замовлення</h4>

        <div className="cartitems__items">
          {cart.items.length > 0 && (
            <ul className="cartitems__list">
              {cart.items.map((item) => <CartItemComponent key={item._id} item={item} />)}
              {cart.totalCost < 300 && <DeliveryItem /> }
            </ul>
          )}
          
          <div className="cartitems__listFooter">
            {cart.items.length > 0 && <button onClick={() => clearCart()} className='cartitems__clearCartBtn'>Очистити корзину</button>}

            <h4 className="cartitems__totalCost">
              <span className="cartitems__totalCostNumber">{cart.totalCost < 300 && cart.totalItems > 0 && cart.items.length > 0 ? cart.totalCost + 40 : cart.totalCost}.00 </span>
              <span className="cartitems__totalCostText">грн</span>
            </h4>
          </div>
        </div>  
      </div>
    )
}

export default CartItems