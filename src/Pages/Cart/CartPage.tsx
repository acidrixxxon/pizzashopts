import React from 'react'
import CartItems from '../../Components/common/CartItems/CartItems'
import Container from '../../Components/common/Container/Container'
import OrderForm from '../../Components/common/Forms/OrderForm/OrderForm'
import { Context } from '../../Context'
import { useLocationChanges } from '../../hooks/useLocationChanges'
import { initialCustomerDataErrors } from '../../Utils/initialStore'
import './_CartPage.scss'

const CartPage:React.FC = () => {
  const { actions: { setFieldError } } = React.useContext(Context)

  useLocationChanges(() => setFieldError(initialCustomerDataErrors))

  
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