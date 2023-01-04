import React from 'react';

import CartItems from '../../Components/common/CartItems/CartItems';
import Container from '../../Components/common/Container/Container';
import OrderForm from '../../Components/common/Forms/OrderForm/OrderForm';
import { getCustomerDataActions } from '../../Context/actions';
import { Context1 } from '../../Context/Context';
import { useLocationChanges } from '../../hooks/useLocationChanges';
import { initialCustomerDataErrors } from '../../Utils/initialStore';

import './_CartPage.scss';

const CartPage: React.FC = () => {
  const { dispatch } = React.useContext(Context1);
  const { setFieldError } = getCustomerDataActions(dispatch);

  useLocationChanges(() => setFieldError(initialCustomerDataErrors));

  return (
    <div id='cart'>
      <Container>
        <div className='cart__wrapper'>
          <OrderForm />
          <CartItems />
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
