import React from 'react'
import { AiFillCheckCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { Context1 } from '../../../Context/Context'
import { ICartItem } from '../../../Context/context_types'
import LocalStorageService from '../../../Services/LocalStorageService'
import { IPizzaInCart } from '../../../types'
import './_CartStatusItem.scss'


interface ComponentProps {
    item: ICartItem
}

const CartStatusItem:React.FC<ComponentProps> = ({ item }) => {
    const [ addCheese,setAddCheese ] = React.useState<boolean>(false)
    const [ animation,setAnimation ] = React.useState<'scaleup__animation' | 'scaledown__animation' | null>(null)

    const { actions: { changeItemQty,toggleExtraMocarella },state: { cart } } = React.useContext(Context1)

    const addCheeseHandler = () => {
        setAddCheese(true)
        toggleExtraMocarella(item.uniqueId,'add')
    }

    const removeCheeseHandler = () => {
        setAddCheese(false)
        toggleExtraMocarella(item.uniqueId,'remove')
    }

    const changeQtyHandler = (type: string,id: string | undefined):void => {
        if (type === 'plus') {
            setAnimation('scaleup__animation')
            changeItemQty('plus',item.uniqueId)
        } else {
            setAnimation('scaledown__animation')
            changeItemQty('minus',item.uniqueId)
        }

        setTimeout(() => {
            setAnimation(null)
        },200)
    }

    React.useEffect(() => {
        if (item.productClass === 0) {
            const cheese = item.ingridients.find(item => item.id === 15)
            if (cheese !== undefined) {
                if(cheese.qty > 1) {
                    setAddCheese(true)
                } else {
                    setAddCheese(false)
                }
            }
    
            LocalStorageService.saveCartUpdate(cart)
        }
    },[item])

    return (
        <li className='cartStatus__item'>
            <div className="cartStatus__header">
                <h4 className="cartStatus__title">{item.fulltitle} {item.productClass !== 0 && `(${item.size})`}</h4>

                {item.productClass === 0 && 
                    <span className="cartStatus__addSmth">
                        { addCheese ? <AiFillCheckCircle className='added' onClick={removeCheeseHandler} /> : <AiOutlinePlusCircle onClick={addCheeseHandler} />}
                        2х Сир
                    </span>
                }
            </div>

            <div className="cartStatus__body">
                <div className="cartStatus__qty">
                    <span className="minus" onClick={() => changeQtyHandler('minus',item.uniqueId)}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 491.858 491.858"><path d="M465.167,211.613H240.21H26.69c-8.424,0-26.69,11.439-26.69,34.316s18.267,34.316,26.69,34.316h213.52h224.959 c8.421,0,26.689-11.439,26.689-34.316S473.59,211.613,465.167,211.613z"></path></svg></span>
                    <span className={animation ? `qty ${animation}` : 'qty'}>{item.qty}</span>
                    <span className="plus" onClick={() => changeQtyHandler('plus',item.uniqueId)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23,10h-8.5c-0.3,0-0.5-0.2-0.5-0.5v-8.5c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1v8.5c0,0.3-0.2,0.5-0.5,0.5h-8.5c-0.6,0-1,0.4-1,1v2c0,0.6 0.4,1 1,1h8.5c0.3,0 0.5,0.2 0.5,0.5v8.5c0,0.6 0.4,1 1,1h2c0.6,0 1-0.4 1-1v-8.5c0-0.3 0.2-0.5 0.5-0.5h8.5c0.6,0 1-0.4 1-1v-2c0-0.6-0.4-1-1-1z"></path></svg></span>
                </div>

                <span className="cartStatus__price">{item.price * item.qty}грн</span>
            </div>
        </li>
    )
}

export default CartStatusItem