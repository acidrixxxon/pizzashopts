import React from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { v4 } from 'uuid';

import { Context1 } from '../../../../Context/Context';
import { getCartActions, getProductDetailsActions } from '../../../../Context/actions';
import { IPizzaInCart } from '../../../../types';
import SetIngridients from '../../Modals/SetIngridients/SetIngridients';
import ReactPortal from '../../ReactPortal/ReactPortal';
import './_ProductInfo.scss';

const ProductInfo: React.FC = () => {
  const [activeSize, setActiveSize] = React.useState<number>(0);
  const [activeType, setActiveType] = React.useState<number>(0);
  const [visibleModal, setVisibleModal] = React.useState<boolean>(false);

  const setSize = (index: number): void => {
    setActiveSize(index);
    setActiveType(0);
  };

  const {
    dispatch,
    state,
    state: { productDetails },
  } = React.useContext(Context1);
  const { addToCart } = getCartActions(dispatch, state);
  const { setProductDetails, changeIngridientQty } = getProductDetailsActions(dispatch, state);

  const addToCartHandler = (): void => {
    const productObj: IPizzaInCart = {
      _id: productDetails.variants[activeSize].variants[activeType]._id,
      uniqueId: v4(),
      imageUrl: productDetails.imageUrl,
      fullimageUrl: productDetails.fullimageUrl,
      class: productDetails.class,
      title: productDetails.title,
      fulltitle: productDetails.variants[activeSize].variants[activeType].fulltitle,
      price: productDetails.variants[activeSize].variants[activeType].price,
      ingridients: productDetails.ingridients,
      qty: 1,
      isSell: productDetails.variants[activeSize].variants[activeType].inSell,
    };

    addToCart(productObj);
    setSize(0);
    productDetails.defaultObj && setProductDetails(productDetails.defaultObj);
  };

  return (
    <div id='productInfo'>
      <h4 className='productInfo__title'>{productDetails.title}</h4>

      {productDetails.ingridients !== undefined && productDetails.ingridients.length > 0 ? (
        <>
          <div className='productInfo__ingridients'>
            <span>Інгрідієнти</span>

            <ul className='productInfo__ingridientsList'>
              {productDetails.ingridients.map((ingridient) => {
                return (
                  <li className='productInfo__ingridient' key={ingridient._id}>
                    <span className='remove-icon' onClick={() => changeIngridientQty('minus', ingridient)}>
                      <AiOutlineClose />
                    </span>

                    <div className='productInfo__ingridientImage'>
                      <img src={ingridient.ingridientId.imageUrl} alt='image' />
                    </div>

                    <span className='productInfo__ingridientTitle'>{ingridient.ingridientId.title}</span>

                    <div className='productInfo__ingridientQty' id='qty'>
                      <span className='minus' onClick={() => changeIngridientQty('minus', ingridient)}>
                        -
                      </span>
                      <span className='qty'>{ingridient.qty}</span>
                      <span className='plus' onClick={() => changeIngridientQty('plus', ingridient)}>
                        +
                      </span>
                    </div>
                  </li>
                );
              })}

              <li className='productInfo__ingridient addIngridient' onClick={() => setVisibleModal(true)}>
                <div className='productInfo__ingridientImage'>
                  <AiOutlinePlus />
                </div>
              </li>
            </ul>
          </div>
        </>
      ) : (
        ''
      )}

      <div className='productInfo__options'>
        {productDetails.class === 0 ? (
          <>
            <div className='productInfo__left'>
              <h4 className='productInfo__title'>Розміри</h4>

              <ul className='productInfo__list'>
                {productDetails.variants &&
                  productDetails.variants.map((item, index) => {
                    return (
                      <li className='productInfo__item' key={index} onClick={() => setSize(index)}>
                        <div className='productInfo__checkbox'>
                          <input type='checkbox' checked={activeSize === index} />

                          {item.title}
                        </div>

                        <div className='productInfo__price'>від {item.variants[0].price}.00 грн</div>
                      </li>
                    );
                  })}
              </ul>
            </div>

            <div className='productInfo__right'>
              <h4 className='productInfo__title'>Тісто</h4>

              <ul className='productInfo__list'>
                {productDetails.variants &&
                  productDetails.variants[activeSize].variants.map((item, index) => {
                    return (
                      <li className='productInfo__item' key={index} onClick={() => setActiveType(index)}>
                        <div className='productInfo__checkbox'>
                          <input type='checkbox' checked={activeType === index} />

                          {item.title}
                        </div>

                        <div className='productInfo__price'>від {item.price}.00 грн</div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </>
        ) : null}
      </div>

      <div className='productInfo__totals'>
        <div className='productInfo__price'>{productDetails.variants[activeSize].variants[activeType].price}.00 грн</div>

        <button className='productInfo__toCart' onClick={addToCartHandler}>
          В кошик
        </button>
      </div>

      <ReactPortal wrapperId='root'>
        <SetIngridients visible={visibleModal} setVisible={setVisibleModal} />
      </ReactPortal>
    </div>
  );
};

export default ProductInfo;
