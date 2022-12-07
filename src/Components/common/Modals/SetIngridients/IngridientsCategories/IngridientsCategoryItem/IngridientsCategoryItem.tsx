import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { getProductDetailsActions } from '../../../../../../Context/actions';

import { Context1 } from '../../../../../../Context/Context';
import { IIngridient } from '../../../../../../types';
import './_IngridientsCategoryItem.scss';

interface IComponentProps {
  item: IIngridient;
}

const IngridientsCategoryItem: React.FC<IComponentProps> = ({ item }) => {
  const {
    state: { productDetails },
    dispatch,
    state,
  } = React.useContext(Context1);
  const { addIngridientToPizza, changeIngridientQty } = getProductDetailsActions(dispatch);

  // const alreadyInPizza = productDetails.ingridients.find(ingridient => ingridient.id === item.id)

  return (
    <div id='ingridientCategoryItem'>
      {/* <img src={item.imageUrl} alt="ingrti" className="ingridientItem__image" />

            <h6 className="ingridientItem__title">{item.title}</h6>

            { alreadyInPizza ? (
                <div className="productInfo__ingridientQty" id="qty">
                    <span className="minus" onClick={() => changeIngridientQty('minus',item)}>-</span>
                    <span className="qty">{alreadyInPizza.qty}</span>
                    <span className="plus" onClick={() => changeIngridientQty('plus',item)}>+</span>
                </div>
            ) :    
                <span className="ingridientItem__add" onClick={() => addIngridientToPizza({id: item.id,qty: 1})}>
                    <AiOutlinePlus />
                </span>} */}
    </div>
  );
};

export default IngridientsCategoryItem;
