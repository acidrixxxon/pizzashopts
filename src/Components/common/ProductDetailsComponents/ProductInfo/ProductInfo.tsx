import React from 'react'
import './_ProductInfo.scss'
import { IIngridients,  PizzaProductSizeInterface } from '../../../../types'
import { ingridientsList } from '../../../../mockdata'
import  { AiOutlineClose,AiOutlinePlus } from 'react-icons/ai'
import ReactPortal from '../../ReactPortal/ReactPortal'
import SetIngridients from '../../Modals/SetIngridients/SetIngridients'
import { Context } from '../../../../Context'
import { v4 as uuidv4 } from 'uuid';

interface IProductInfo {
    data:  {
        title: string,
        ingridients: IIngridients[] | undefined,
        class: number,
        variants: PizzaProductSizeInterface[] 
    }
}

const ProductInfo:React.FC<IProductInfo> = ({ data }) => {
    const [ activeSize,setActiveSize ] = React.useState<number>(0)
    const [ activeType,setActiveType ] = React.useState<number>(0)
    const [ visibleModal,setVisibleModal ] = React.useState<boolean>(false)

    const setSize = (index: number): void => {
        setActiveSize(index)
        setActiveType(0)
    }

    const { dispatch,actions: { changeIngridientQty },state: { productDetails }} = React.useContext(Context)
    
    const addToCartHandler = ():void => {
        const productObj = {
            ...productDetails.variants[activeSize].variants[activeType],
            imageUrl: productDetails.imageUrl,
            qty: 1,
            title: productDetails.title,
            ingridients: productDetails.ingridients,
            uniqueId: uuidv4()
        }

        dispatch({type: 'ADD_TO_CART',payload: productObj})
    }


    return (
        <div id="productInfo">
            <h4 className="productInfo__title">{data.title}</h4>

            {data.ingridients !== undefined && data.ingridients.length > 0 ? 
                <>
                    <div className="productInfo__ingridients">
                        <span>Інгрідієнти</span>

                        <ul className="productInfo__ingridientsList">
                            {data.ingridients.map((ingridient) => {
                                const prod = ingridientsList.find(prod => prod.id === ingridient.id)
                                
                                return (
                                    <li className='productInfo__ingridient' key={ingridient.id}>
                                        <span className="remove-icon">
                                            <AiOutlineClose />
                                        </span>

                                        <div className="productInfo__ingridientImage">
                                            <img src={prod?.imageUrl} alt="image" />
                                        </div>

                                        <span className="productInfo__ingridientTitle">{prod?.title}</span>

                                        <div className="productInfo__ingridientQty" id="qty">
                                            <span className="minus" onClick={() => changeIngridientQty('minus',prod)}>-</span>
                                            <span className="qty">{ingridient.qty}</span>
                                            <span className="plus" onClick={() =>  changeIngridientQty('plus',prod)}>+</span>
                                        </div>
                                    </li>
                                )
                            })}

                            <li className="productInfo__ingridient addIngridient" onClick={() => setVisibleModal(true)}>
                                <div className="productInfo__ingridientImage">
                                    <AiOutlinePlus />
                                </div>
                            </li>
                        </ul>
                    </div>
                </> : ''}

            <div className="productInfo__options">
                {data.class === 0 ? <>
                    <div className="productInfo__left">
                        <h4 className="productInfo__title">Розміри</h4>

                        <ul className="productInfo__list">
                            {data.variants && data.variants.map((item,index) => {
                                return (
                                    <li className='productInfo__item' key={index} onClick={() =>setSize(index)}>
                                        <div className="productInfo__checkbox">
                                            <input type="checkbox" checked={activeSize === index} />

                                            {item.title}
                                        </div>

                                        <div className="productInfo__price">
                                            від {item.variants[0].price}.00 грн
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="productInfo__right">
                        <h4 className="productInfo__title">Тісто</h4>    

                        <ul className="productInfo__list">
                            {data.variants && data.variants[activeSize].variants.map((item,index) => {

                                return (
                                    <li className='productInfo__item' key={index} onClick={() => setActiveType(index)}>
                                        <div className="productInfo__checkbox">
                                            <input type="checkbox" checked={activeType === index} />

                                            {item.title}
                                        </div>

                                        <div className="productInfo__price">
                                            від {item.price}.00 грн
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </> : null}
            </div>

            <div className="productInfo__totals">
                <div className="productInfo__price">
                    {data.variants[activeSize].variants[activeType].price}.00 грн
                </div>

                <button className="productInfo__toCart" onClick={addToCartHandler}>
                    В кошик
                </button>
            </div>

            <ReactPortal wrapperId='root'>
                <SetIngridients visible={visibleModal} setVisible={setVisibleModal} />
            </ReactPortal>
        </div>
    )
}

export default ProductInfo