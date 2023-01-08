import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Context1 } from '../../../../../../Context/Context';
import { getViewActions } from '../../../../../../Context/actions';
import { useContextDispatch } from '../../../../../../hooks/useContextDispatch';
import { IPizzaIngridientShort } from '../../../../../../types/ProductTypes';
import './_ActiveIngridients.scss';

const ActiveIngridients: React.FC = () => {
  const {
    state: { view },
  } = React.useContext(Context1);

  const dispatch = useContextDispatch();

  const { searchResultRemoveIngridient } = getViewActions(dispatch, view);

  const removeIngridient = (ingridient: IPizzaIngridientShort): void => {
    searchResultRemoveIngridient(ingridient);
  };

  const activeIngridients =
    view.search.searchResultModal.data &&
    view.search.searchResultModal.data.ingridients &&
    view.search.searchResultModal.data.ingridients.length > 0
      ? view.search.searchResultModal.data.ingridients
      : null;

  return (
    <div id='active-ingridients'>
      <span className='active-ingridients__title'>Інгрідієнти:</span>

      <ul className='active-ingridients__list'>
        {activeIngridients &&
          activeIngridients.map((item) => {
            return (
              <li
                className={
                  item.ingridientId._id === '63714ca4858cf7c6b09716fc'
                    ? 'active-ingridients__list-item widthout__removeIcon'
                    : 'active-ingridients__list-item'
                }
                key={item.ingridientId._id}>
                {item.ingridientId.title}
                <span className='active-ingridients__remove' onClick={() => removeIngridient(item)}>
                  <AiOutlineClose className='active-ingridients__remove-icon' />
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ActiveIngridients;
