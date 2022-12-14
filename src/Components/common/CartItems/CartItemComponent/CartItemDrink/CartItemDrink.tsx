import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { getCartActions } from '../../../../../Context/actions';
import { Context1 } from '../../../../../Context/Context';
import { IDrinkInCart } from '../../../../../types';

interface ComponentProps {
  item: IDrinkInCart;
}

const CartItemDrink: React.FC<ComponentProps> = ({ item }) => {
  const { dispatch, state } = React.useContext(Context1);
  const { changeItemQty, removeFromCart } = getCartActions(dispatch, state);

  return (
    <li id='cartitem'>
      <div className='cartitem__image'>
        <img src={item.imageUrl} alt={item.title} className='cartitem__img' />
      </div>

      <div className='cartitem__description'>
        <div className='cartitem__header'>
          <span className='cartitem__title'>
            {item.title}({item.size.toLocaleLowerCase()})
          </span>

          <AiOutlineClose onClick={() => removeFromCart(item)} />
        </div>

        <div className='cartitem__footer'>
          <div className='cartitem__priceBlock'>
            <span className='cartitem__price'>{item.price * item.qty}.00</span>
            <span className='cartitem__currency'>грн</span>
          </div>

          <div className='cartitem__qtyBlock'>
            <span className='minus' onClick={() => changeItemQty('minus', item.uniqueId)}>
              <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 491.858 491.858'>
                <path d='M465.167,211.613H240.21H26.69c-8.424,0-26.69,11.439-26.69,34.316s18.267,34.316,26.69,34.316h213.52h224.959 c8.421,0,26.689-11.439,26.689-34.316S473.59,211.613,465.167,211.613z'></path>
              </svg>
            </span>
            <span className='qty'>{item.qty}</span>
            <span className='plus' onClick={() => changeItemQty('plus', item.uniqueId)}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='m23,10h-8.5c-0.3,0-0.5-0.2-0.5-0.5v-8.5c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1v8.5c0,0.3-0.2,0.5-0.5,0.5h-8.5c-0.6,0-1,0.4-1,1v2c0,0.6 0.4,1 1,1h8.5c0.3,0 0.5,0.2 0.5,0.5v8.5c0,0.6 0.4,1 1,1h2c0.6,0 1-0.4 1-1v-8.5c0-0.3 0.2-0.5 0.5-0.5h8.5c0.6,0 1-0.4 1-1v-2c0-0.6-0.4-1-1-1z'></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItemDrink;
