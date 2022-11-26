import React from 'react'
import { IDrinkInCart, IPizzaInCart, ISideInCart } from '../../../types'
import DrinkView from '../CartStatusView/DrinkView/DrinkView'
import PizzaView from '../CartStatusView/PizzaView/PizzaView'
import SideView from '../CartStatusView/SideView/SideView'
import './_CartStatusItem.scss'


interface ComponentProps {
    item: any
}

const CartStatusItem:React.FC<ComponentProps> = ({ item }) => {

    return (
        <>
            {item.class === 0 && <PizzaView item={item} />}
            {item.class === 1 && <SideView item={item} />}
            {item.class === 2 && <DrinkView item={item} />}
        </>
    )
}

export default CartStatusItem