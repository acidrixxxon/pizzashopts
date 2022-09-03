import React from 'react'
import { IDrinkInCart, IIngridientsFull, IPizzaInCart, ISideInCart } from '../../../../types'
import './_CartItemComponent.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { ingridientsList } from '../../../../mockdata'
import { Context } from '../../../../Context'

interface ComponentProps {
    item: IPizzaInCart,
}

const CartItemComponent:React.FC<ComponentProps> = ({ item }) => {
    const { dispatch } = React.useContext(Context)

    const removeItemFromCart = (item: IPizzaInCart | IDrinkInCart | ISideInCart):void => {
        dispatch({type: 'REMOVE_FROM_CART',payload: item})
    }

    const changeQtyHandler = (type: string,id: number):void => {
        if (type === 'plus') {
            dispatch({type: 'PLUS_QTY',payload: id})
        } else {
            dispatch({type: 'MINUS_QTY',payload: id})
        }
    }

    return (
        <li id='cartitem'>
            <div className="cartitem__image">
                <img src={item.imageUrl} alt={item.title} className="cartitem__img" />
            </div>

                <div className="cartitem__description">
                    <div className="cartitem__header">
                        <span className="cartitem__title">
                            {item.fulltitle !== undefined ? item.fulltitle : item.title}
                        </span>

                        <AiOutlineClose onClick={() => removeItemFromCart(item)}/>
                    </div>

                    {item.ingridients !== undefined &&<div className="cartitem__body">
                        {item.ingridients.map((it,index) => {
                            const prod = ingridientsList.find(ingrid => ingrid.id === it.id)
                            return (
                                <span key={index}>{prod?.title}{it.qty > 1 && '(Подвіна порція)'}{item.ingridients.length > index + 1 ? ', ' : null}</span>
                       )     
                        })}
                    </div>}

                    <div className="cartitem__footer">
                        <div className="cartitem__priceBlock">
                            <span className="cartitem__price">{item.price * item.qty}.00</span>
                            <span className="cartitem__currency">грн</span>
                        </div>

                        <div className="cartitem__qtyBlock">
                            <span className="minus" onClick={() => changeQtyHandler('minus',item.id)}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 491.858 491.858"><path d="M465.167,211.613H240.21H26.69c-8.424,0-26.69,11.439-26.69,34.316s18.267,34.316,26.69,34.316h213.52h224.959 c8.421,0,26.689-11.439,26.689-34.316S473.59,211.613,465.167,211.613z"></path></svg></span>
                            <span className="qty">{item.qty}</span>
                            <span className="plus" onClick={() => changeQtyHandler('plus',item.id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23,10h-8.5c-0.3,0-0.5-0.2-0.5-0.5v-8.5c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1v8.5c0,0.3-0.2,0.5-0.5,0.5h-8.5c-0.6,0-1,0.4-1,1v2c0,0.6 0.4,1 1,1h8.5c0.3,0 0.5,0.2 0.5,0.5v8.5c0,0.6 0.4,1 1,1h2c0.6,0 1-0.4 1-1v-8.5c0-0.3 0.2-0.5 0.5-0.5h8.5c0.6,0 1-0.4 1-1v-2c0-0.6-0.4-1-1-1z"></path></svg></span>
                        </div>
                    </div>
                </div>
        </li>
    )
}

export default CartItemComponent