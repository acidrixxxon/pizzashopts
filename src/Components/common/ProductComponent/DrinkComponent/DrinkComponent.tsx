import React from 'react'

import { Context1 } from '../../../../Context/Context'
import { IDrinkNew } from '../../../../types'
import NewProductIcon from '../../NewProductIcon/NewProductIcon'

import './_DrinkComponent.scss'
import { v4 as uuidv4 } from 'uuid';

interface ComponentProps {
  item: IDrinkNew
}

const DrinkComponent:React.FC<ComponentProps> = ({ item }) => {
  console.log(item)
  const [ activeSize,setActiveSize ] = React.useState<number>(0)
  
  const { actions: { addToCart }} = React.useContext(Context1)

  const addToCartHandler = (item: IDrinkNew):void => {
      const productObj = {
        _id: item.variants[activeSize]._id,
        uniqueId: uuidv4(),
        size: item.variants[activeSize].size,
        price: item.variants[activeSize].price,
        title: item.title,
        qty: 1,
        category: item.category,
        class: 2,
        imageUrl: item.imageUrl
      }

      addToCart(productObj)
      setActiveSize(0)
  }

  return (
    <div id="drink">
      <div className="drink__image">
          <img src={item.imageUrl} alt={item.title} />

          {item.newProduct === true && <NewProductIcon />}
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