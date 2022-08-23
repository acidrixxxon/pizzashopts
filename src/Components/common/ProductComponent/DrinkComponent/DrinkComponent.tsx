import React from 'react'
import { Context } from '../../../../Context'
import { IDrink } from '../../../../types'
import './_DrinkComponent.scss'

interface ComponentProps {
  item: IDrink
}

const DrinkComponent:React.FC<ComponentProps> = ({ item }) => {
  const [ activeSize,setActiveSize ] = React.useState<number>(0)

  const { dispatch } = React.useContext(Context)

  const addToCartHandler = (item: IDrink):void => {
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
    <div id="drink">
      <div className="drink__image">
          <img src={item.imageUrl} alt={item.title} />
      </div>

      <h4 className="drink__title">{item.title}</h4>

      <div className="drink__variants">
          {item.variants.map((variant,index) => {
              return (
                  <button
                      key={index}
                      onClick={() => setActiveSize(index)}
                      className={activeSize === index ? 'drink__variantBtn active' : 'drink__variantBtn'}>
                      {variant.size}
                  </button>
              )
          })}
      </div>

      <div className="drink__footer">
          <div className="drink__price">
              <span className="drink__priceNumber">{item.variants[activeSize].price} </span>
              <span className="drink__priceText">грн</span>
          </div>

          <button className='drink__addToCart' onClick={() => addToCartHandler(item)}>В кошик</button>    
      </div>
    </div>
  )
}

export default DrinkComponent