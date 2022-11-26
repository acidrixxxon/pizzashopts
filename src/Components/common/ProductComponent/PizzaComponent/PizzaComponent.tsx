import React from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { IPizzaInCart } from '../../../../types'
import './_PizzaComponent.scss'
import { Context1 } from '../../../../Context/Context'
import { IPizza } from '../../../../types/ProductTypes';

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
    // const productObj = new CartProductDTO(pizza.class,item.imageUrl,
    //         item.variants[activeSize].variants[activeType].fulltitle,
    //         item.title,item.variants[activeSize].variants[activeType].price,
    //         item.ingridients,
    //         item.variants[activeSize].variants[activeType]._id,
    //         item.variants[activeSize].variants[activeType].isSell,undefined)

    const productObj:IPizzaInCart = {
        _id: item.variants[activeSize].variants[activeType]._id,
        uniqueId: uuidv4(),
        imageUrl: item.imageUrl,
        fullimageUrl: item.fullimageUrl,
        class: item.class,
        title: item.title,
        fulltitle: item.variants[activeSize].variants[activeType].fulltitle,
        price: item.variants[activeSize].variants[activeType].price,
        ingridients: item.ingridients,
        qty: 1,
        isSell: item.variants[activeSize].variants[activeType].isSell
    }
    console.log(productObj)
    addToCart(productObj)
    resetAllButtons()
  }

    return (
        <div className='pizza-wrapper'>
            <Link to={`/product/${pizza._id}`} className='pizza-image'>
                <img src={pizza.imageUrl} alt="pizza-image1" />
            </Link>

            <div className="pizza-description">

                <Link className="pizza-title" to={`/product/${pizza._id}`}>
                    {pizza.title}
                </Link>

                <p className="pizza-toppings">
                    {pizza.ingridients.map(({ ingridientId,qty },index) => {
                        return <span key={ingridientId._id}>{ingridientId.title}{qty > 1 && '(Подвійна порція)'}{pizza.ingridients.length === index + 1 ? null : ', '}</span>
                    })}
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
                                disabled={!item.isSell}
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