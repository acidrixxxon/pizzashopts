import React from 'react'
import { Context1 } from '../../../../Context/Context'
import { CartProductDTO } from '../../../../Dto/CartDto'
import { IDrink } from '../../../../types'
import './_DrinkComponent.scss'

interface ComponentProps {
  item: IDrink
}

const DrinkComponent:React.FC<ComponentProps> = ({ item }) => {
  const [ activeSize,setActiveSize ] = React.useState<number>(0)
  console.log(item)
  const { actions: { addToCart }} = React.useContext(Context1)

  const addToCartHandler = (item: IDrink):void => {
    const productObj = new CartProductDTO(item.class,item.imageUrl,
      item.title,
      item.title,
      item.variants[activeSize].price,
      undefined,
      item.id,
      true,
      item.variants[activeSize].size)

      addToCart(productObj)
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