import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import { Context, initialStateType } from '../../Context'
import './_CartStatus.scss'

const CartStatus = () => {
  const { state: { cart }} = React.useContext(Context)

    return (
        <Link to="/cart" id='cartstatus'>
            <span className='cartstatus__count'>
                {cart === null ? '00' : cart.totalItems === 0 ? '00' : cart?.totalItems < 10 ? `0${cart?.totalItems}` : cart?.totalItems}
                <AiOutlineShoppingCart />
            </span>

            <span className="cartstatus__price">
                {cart === null ? 0 : cart.totalCost}.00 грн
            </span>

            <span className="cartstatus__orderBtn">
                Замовити
            </span>
        </Link>
        )
}

export default CartStatus