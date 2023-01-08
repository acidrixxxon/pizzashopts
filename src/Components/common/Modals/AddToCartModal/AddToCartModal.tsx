import { AnimatePresence, motion } from 'framer-motion';
import React, { FC } from 'react';

import { Context1 } from '../../../../Context/Context';
import { getCartActions, getViewActions } from '../../../../Context/actions';
import { getProductDto } from '../../../../Dto/CartDto';
import { IProductActiveSize } from '../../../../types/ProductTypes';
import ReactPortal from '../../ReactPortal/ReactPortal';
import AddToCartBtn from '../../UI/Buttons/AddToCartBtn/AddToCartBtn';
import Ingridients from './Ingridients/Ingridients';
import Size from './Size/Size';
import './_AddToCartModal.scss';

const AddToCartModal: FC = () => {
  const {
    dispatch,
    state,
    state: {
      view: {
        search: {
          searchResultModal: { status, data },
        },
      },
    },
  } = React.useContext(Context1);

  const [activeSize, setActiveSize] = React.useState<IProductActiveSize>({
    size: 0,
    crust: 0,
  });

  React.useEffect(() => {
    if (!data) setSearchResultModalVisibility('hidden');
  }, []);

  const { setSearchResultModalData, setSearchResultModalVisibility } = getViewActions(dispatch);
  const { addToCart } = getCartActions(dispatch, state);

  const hideVisibility = () => {
    setSearchResultModalVisibility('hidden');
    setSearchResultModalData(null);
  };

  const addToCartHandler = () => {
    const productObj = getProductDto(data, activeSize.size, activeSize.crust);

    if (productObj) {
      addToCart(productObj);
      setSearchResultModalData(data?.class === 0 ? data?.defaultObj : data);
    }

    setActiveSize({ size: 0, crust: 0 });
  };

  return (
    <>
      <AnimatePresence>
        {status === 'visible' && data && (
          <ReactPortal wrapperId='root'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='addToCartModal__overlay'
              onClick={hideVisibility}>
              <motion.div className='addToCartModal__content' onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                <div className='addToCartModal__image-container'>
                  <img src={data.imageUrl} alt={data.title} className='addToCartModal__image' />
                </div>

                <div className='addToCartModal__details'>
                  <h4 className='addToCartModal__title'>{data.title}</h4>

                  <Size activeSize={activeSize} setActiveSize={setActiveSize} />

                  {data.class === 0 && data.ingridients && <Ingridients />}

                  <div className='addToCartModal__footer'>
                    <span className='addToCartModal__price'>
                      {data.class === 0
                        ? data.variants[activeSize.size].variants[activeSize.crust].price
                        : data.variants[activeSize.size].price}{' '}
                      грн
                    </span>

                    <AddToCartBtn onClick={addToCartHandler} withRipple />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </ReactPortal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AddToCartModal;
