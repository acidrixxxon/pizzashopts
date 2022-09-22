import React from 'react'
import { Link } from 'react-router-dom'
import { ingridientsList } from '../../../../mockdata'
import { IPizza } from '../../../../types'
import './_PizzaComponent.scss'
import { Context1 } from '../../../../Context/Context'
import { CartProductDTO } from '../../../../Dto/CartDto'

interface ComponentProps {
  pizza: IPizza
}

const PizzaComponent:React.FC<ComponentProps> = ({ pizza }) => {
  const [ activeSize,setActiveSize ] = React.useState<number>(0)
  const [ activeType,setActiveType ] = React.useState<number>(0)

  const changePizzaSize = (size: number):void => {
    setActiveSize(size)
    setActiveType(0)
  }

  const resetAllButtons = ():void => {
    setActiveSize(0)
    setActiveType(0)
  }

  const { actions: { addToCart } } = React.useContext(Context1)
  
  const addToCartHandler = (item: IPizza):void => {
    const productObj = new CartProductDTO(pizza.class,item.imageUrl,
            item.variants[activeSize].variants[activeType].fulltitle,
            item.title,item.variants[activeSize].variants[activeType].price,
            item.ingridients,
            item.variants[activeSize].variants[activeType].id,
            item.variants[activeSize].variants[activeType].inSell,undefined)

    addToCart(productObj)
    resetAllButtons()
  }

    return (
        <div className='pizza-wrapper'>
            <Link to={`/product/${pizza.id}`} className='pizza-image'>
                <img src={pizza.imageUrl} alt="pizza-image1" />
            </Link>

            <div className="pizza-description">

                <Link className="pizza-title" to={`/product/${pizza.id}`}>
                    {pizza.title}
                </Link>

                <p className="pizza-toppings">
                    {pizza.ingridients ? pizza.ingridients.map((item,index) => {
                        const prod = ingridientsList.find(prod => prod.id === item.id)
                        if (prod) {
                        return <span key={index}>{prod.title}{item.qty > 1 && '(Подвійна порція)'}{pizza.ingridients.length === index + 1 ? null : ', '}</span>
                        } else {
                            return null
                        }
                    }) : 'Гриби, Моцарела, Пепероні, Соус Альфредо'}
                </p> 
            </div>

            <div className="pizza-variants">
                <div className="pizza-variantsList pizza-sizes">
                    {pizza.variants.map((item,index) => {
                        return (
                            <button 
                                key={index}
                                onClick={() => changePizzaSize(index)}
                                className={activeSize === index ? 'pizza-variantsButton active' : 'pizza-variantsButton'}>
                                {item.title}
                            </button>
                        )
                    })}
                </div>

                <div className="pizza-variantsList">
                    {pizza.variants[activeSize].variants.map((item,index) => {
                        return (
                            <button 
                                key={index}
                                disabled={!item.inSell}
                                onClick={() => setActiveType(index)}
                                className={activeType === index ? 'pizza-variantsButton active' : 'pizza-variantsButton'}>
                                    {item.title}
                            </button>
                        )
                    })}
                </div>
            </div>

            <div className="pizza-footer">
                <div className="pizza-price">
                    <span className='pizza-priceNumber'>{pizza.variants[activeSize].variants[activeType].price}</span>
                    <span className='pizza-priceText'>грн</span> 
                </div>
                <button className="pizza-addToCart" onClick={() => addToCartHandler(pizza)}>В кошик</button>
            </div>
    </div>
    )
}

export default PizzaComponent