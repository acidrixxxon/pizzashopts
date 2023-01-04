import React from 'react';

import CartItemDrink from './CartItemDrink/CartItemDrink';
import CartItemPizza from './CartItemPizza/CartItemPizza';
import CartItemSide from './CartItemSide/CartItemSide';

import './_CartItemComponent.scss';

interface ComponentProps {
  item: any;
}

const CartItemComponent: React.FC<ComponentProps> = ({ item }) => {
  return (
    <>
      {item.class === 0 && <CartItemPizza item={item} />}
      {item.class === 1 && <CartItemSide item={item} />}
      {item.class === 2 && <CartItemDrink item={item} />}
    </>
  );
};

export default CartItemComponent;
