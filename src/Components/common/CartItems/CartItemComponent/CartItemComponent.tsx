import React from 'react'

import { IDrinkInCart, IPizzaInCart, ISideInCart } from '../../../../types'

import './_CartItemComponent.scss'
import { AiOutlineClose } from 'react-icons/ai'

import CartItemDrink from './CartItemDrink/CartItemDrink'
import CartItemPizza from './CartItemPizza/CartItemPizza'
import CartItemSide from './CartItemSide/CartItemSide'

import { Context1 } from '../../../../Context/Context'
import { ICartItem } from '../../../../Context/context_types'

interface ComponentProps {
    item: any,
}

const CartItemComponent:React.FC<ComponentProps> = ({ item }) => {
    const { actions: { changeItemQty,removeFromCart }} = React.useContext(Context1)
    
    return (
        <>
            {item.class === 0 && <CartItemPizza item={item} />}
            {item.class === 1 && <CartItemSide item={item} />}
            {item.class === 2 && <CartItemDrink item={item} />}
        </>
    )
}

export default CartItemComponent