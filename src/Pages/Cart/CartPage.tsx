import React from 'react'
import CartItems from '../../Components/common/CartItems/CartItems'
import Container from '../../Components/common/Container/Container'
import OrderForm from '../../Components/common/Forms/OrderForm/OrderForm'
import './_CartPage.scss'

const CartPage:React.FC = () => {
  return (
    <div id="cart">
        <Container>
            <div className="cart__wrapper">
              <OrderForm />
              <CartItems />
            </div>
        </Container>
    </div>
  )
}

export default CartPage