import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Oval } from 'react-loader-spinner';

import { Context1 } from '../../../../../Context/Context';
import { getViewActions } from '../../../../../Context/actions';
import ProductService from '../../../../../Services/ProductService';
import { IIngridientsCategory, IPizzaIngridientFull, IPizzaIngridientShort } from '../../../../../types/ProductTypes';
import './_Ingridients.scss';

interface ComponentProps {
  ingridients: IPizzaIngridientShort[];
}

const Ingridients: React.FC<ComponentProps> = ({ ingridients }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [allIngridients, setAllIngridients] = React.useState<IIngridientsCategory[] | null>(null);

  const {
    state: { view },
    dispatch,
  } = React.useContext(Context1);

  const { searchResultAddIngridient, searchResultRemoveIngridient } = getViewActions(dispatch, view);

  React.useEffect(() => {
    fetchIngridients();
  }, []);

  const fetchIngridients = async () => {
    setLoading(true);

    const data = await ProductService.fetchIngridientList();

    if (data.success === true && data.ingridients.length > 0) {
      setAllIngridients(data.ingridients);
    }
    setLoading(false);
  };

  const addIngridient = (ingridient: IPizzaIngridientFull): void => {
    searchResultAddIngridient(ingridient);
  };

  const removeIngridient = (ingridient: IPizzaIngridientShort): void => {
    searchResultRemoveIngridient(ingridient);
  };

  return (
    <div className='ingridients'>
      <div className='ingridients__active'>
        <span className='ingridients__active-title'>Інгрідієнти:</span>

        <ul className='ingridients__active-list'>
          {ingridients &&
            ingridients.map((item) => {
              return (
                <li
                  className={
                    item.ingridientId._id === '63714ca4858cf7c6b09716fc'
                      ? 'ingridients__active-item widthout__removeIcon'
                      : 'ingridients__active-item'
                  }
                  key={item.ingridientId._id}>
                  {item.ingridientId.title}
                  <span className='ingridients__remove' onClick={() => removeIngridient(item)}>
                    <AiOutlineClose className='ingridients__remove-icon' />
                  </span>
                </li>
              );
            })}
        </ul>
      </div>

      {!loading ? (
        <div className='ingridients__additional'>
          <span className='ingridients__additional-subtitle'>Додаткові інгрідієнти:</span>

          {!loading &&
            allIngridients &&
            allIngridients.length > 0 &&
            allIngridients.map((category) => {
              if (category.ingridients.length > 0) {
                return (
                  <div className='ingridients__category' key={category._id}>
                    <span className='ingridients__category-title'>{category.title}:</span>
                    <ul className='ingridients__category-list'>
                      {category.ingridients.map((ingridient) => {
                        if (!ingridients.find((ingr) => ingr.ingridientId._id === ingridient._id)) {
                          return (
                            <li className='ingridients__category-item' key={ingridient._id} onClick={() => addIngridient(ingridient)}>
                              {ingridient.title}
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                );
              }
            })}
        </div>
      ) : (
        <Oval />
      )}
    </div>
  );
};

export default Ingridients;
