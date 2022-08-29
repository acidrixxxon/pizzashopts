import React from 'react'
import './_ProductInfo.scss'
import { IDrink, IIngridients, IPizza, ISide } from '../../../../types'
import { ingridientsList } from '../../../../mockdata'
import  { AiOutlineClose,AiOutlinePlus } from 'react-icons/ai'

interface IProductInfo {
    data:  {
        title: string,
        ingridients: IIngridients[] | undefined
    }
}

const ProductInfo:React.FC<IProductInfo> = ({ data }) => {
    
    return (
        <div id="product">
            <h4 className="product__title">{data.title}</h4>

            {data.ingridients !== undefined && data.ingridients.length > 0 ? 
                <>
                    <div className="product__ingridients">
                        <span>Інгрідієнти</span>

                        <ul className="product__ingridientsList">
                            {data.ingridients.map((ingridient) => {
                                const prod = ingridientsList.find(prod => prod.id === ingridient.id)

                                return (
                                    <li className='product__ingridient'>
                                        <span className="remove-icon">
                                            <AiOutlineClose />
                                        </span>

                                        <div className="product__ingridientImage">
                                            <img src={prod?.imageUrl} alt="image" />
                                        </div>

                                        <span className="product__ingridientTitle">{prod?.title}</span>

                                        <div className="product__ingridientQty">
                                            <span className="minus">-</span>
                                            <span className="qty">{ingridient.qty}</span>
                                            <span className="plus">+</span>
                                        </div>
                                    </li>
                                )
                            })}

                            <li className="product__ingridient addIngridient">
                                <div className="product__ingridientImage">
                                    <AiOutlinePlus />
                                </div>
                            </li>
                        </ul>
                    </div>
                </> : ''}
        </div>
    )
}

export default ProductInfo