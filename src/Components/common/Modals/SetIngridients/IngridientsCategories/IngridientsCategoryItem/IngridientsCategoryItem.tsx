import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { getProductDetailsActions } from '../../../../../../Context/actions';
import { Context1 } from '../../../../../../Context/Context';
import { IPizzaIngridientFull } from '../../../../../../types/ProductTypes';

import './_IngridientsCategoryItem.scss';

interface IComponentProps {
  item: IPizzaIngridientFull;
}

const IngridientsCategoryItem: React.FC<IComponentProps> = ({ item }) => {
  const {
    state: { productDetails },
    dispatch,
    state,
  } = React.useContext(Context1);
  const { addIngridientToPizza, changeIngridientQty } = getProductDetailsActions(dispatch, state);

  const alreadyInPizza = productDetails.ingridients.find((ingridient) => ingridient.ingridientId._id === item._id);

  return (
    <div id='ingridientCategoryItem'>
      <img src={item.imageUrl} alt='ingrti' className='ingridientItem__image' />

      <h6 className='ingridientItem__title'>{item.title}</h6>

      {alreadyInPizza ? (
        <div className='productInfo__ingridientQty' id='qty'>
          <span className='minus' onClick={() => changeIngridientQty('minus', { _id: item._id, qty: 1, ingridientId: item })}>
            -
          </span>
          <span className='qty'>{alreadyInPizza.qty}</span>
          <span className='plus' onClick={() => changeIngridientQty('plus', { _id: item._id, qty: 1, ingridientId: item })}>
            +
          </span>
        </div>
      ) : (
        <span className='ingridientItem__add' onClick={() => addIngridientToPizza({ _id: item._id, qty: 1, ingridientId: item })}>
          <AiOutlinePlus />
        </span>
      )}
    </div>
  );
};

export default IngridientsCategoryItem;
