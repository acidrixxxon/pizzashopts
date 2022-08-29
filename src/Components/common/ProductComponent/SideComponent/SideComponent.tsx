import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../../Context'
import { ISide } from '../../../../types'
import './_SideComponent.scss'

interface ComponentProps {
    item: ISide
}

const SideComponent:React.FC<ComponentProps> = ({ item }) => {
    const [ activeSize,setActiveSize ] = React.useState<number>(0)

    const { dispatch } = React.useContext(Context)

    const addToCartHandler = (item: ISide):void => {
        const productObj = {
            ...item.variants[activeSize],
            title: item.title,
            id: item.id,
            imageUrl: item.imageUrl,
            qty: 1
        }

        dispatch({type: 'ADD_TO_CART',payload: productObj})
        setActiveSize(0)
    }

  return (
    <div id="side">
        <Link to={`/product/${item.id}`} className="side__image">
            <img src={item.imageUrl} alt={item.title} />
        </Link>

        <Link to={`/product/${item.id}`} className="side__title">
            <h4>{item.title}</h4>
        </Link>

        <div className="side__variants">
            {item.variants.map((variant,index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setActiveSize(index)}
                        className={activeSize === index ? 'side__variantBtn active' : 'side__variantBtn'}>
                        {variant.size}
                    </button>
                )
            })}
        </div>

        <div className="side__footer">
            <div className="side__price">
                <span className="side__priceNumber">{item.variants[activeSize].price} </span>
                <span className="side__priceText">грн</span>
            </div>

            <button className='side__addToCart' onClick={() => addToCartHandler(item)}>В кошик</button>    
        </div>
    </div>
  )
}

export default SideComponent