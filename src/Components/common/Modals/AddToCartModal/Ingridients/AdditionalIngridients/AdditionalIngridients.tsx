import React from 'react';
import { Oval } from 'react-loader-spinner';

import { Context1 } from '../../../../../../Context/Context';
import { getViewActions } from '../../../../../../Context/actions';
import ProductService from '../../../../../../Services/ProductService';
import { IIngridientsCategory, IPizzaIngridientFull, IPizzaIngridientShort } from '../../../../../../types/ProductTypes';
import './_AdditionalIngridients.scss';

const AdditionalIngridients: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [allIngridients, setAllIngridients] = React.useState<IIngridientsCategory[] | null>(null);

  const {
    state: { view },
    dispatch,
  } = React.useContext(Context1);

  const { searchResultAddIngridient } = getViewActions(dispatch, view);

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

  if (loading) return <Oval />;

  return (
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
                    if (
                      view.search.searchResultModal.data?.ingridients &&
                      !view.search.searchResultModal.data.ingridients.find((ingr) => ingr.ingridientId._id === ingridient._id)
                    ) {
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
  );
};

export default AdditionalIngridients;
