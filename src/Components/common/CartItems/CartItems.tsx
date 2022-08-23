import React from 'react'
import { Context } from '../../../Context'
import CartItemComponent from './CartItemComponent/CartItemComponent'
import './_CartItems.scss'

const CartItems = () => {
  const { state: { cart },dispatch } = React.useContext(Context)


  const clearCartHandler = () => {
      dispatch({ type: 'CLEAR_CART'})
  }

    return (
      <div id="cartitems">
        <h4 className="cartitems__title">Ваше замовлення</h4>

        <div className="cartitems__items">
          {cart.items.length > 0 && (
            <ul className="cartitems__list">
              {cart.items.map((item) => <CartItemComponent key={item.id} item={item} />)}
            </ul>
          )}
          
          <div className="cartitems__listFooter">
            {cart.items.length > 0 && <button onClick={clearCartHandler} className='cartitems__clearCartBtn'>Очистити корзину</button>}

            <h4 className="cartitems__totalCost">
                    <span className="cartitems__totalCostNumber">{cart.totalCost}.00 </span>
                    <span className="cartitems__totalCostText">грн</span>
                  </h4>
          </div>
        </div>  
      </div>
    )
}

export default CartItems