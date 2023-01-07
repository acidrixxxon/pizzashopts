import React from 'react';

import { Context1 } from '../../../Context/Context';
import { getSortActions } from '../../../Context/actions';
import './_Categories.scss';

interface ICategories {
  id: number;
  title: string;
}

const Categories: React.FC = () => {
  const categoriesList: ICategories[] = [
    { id: 0, title: 'Піца' },
    { id: 1, title: 'Сайди' },
    { id: 2, title: 'Напої' },
  ];

  const {
    state: {
      sort: { category },
    },
    dispatch,
  } = React.useContext(Context1);
  const { setCategory, setSort } = getSortActions(dispatch);

  const changeCategoryHandler = (id: number): void => {
    setCategory(id);
    setSort(0);
  };

  return (
    <div className='categories'>
      <ul className='categories__list'>
        {categoriesList.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => changeCategoryHandler(item.id)}
              className={category === item.id ? 'categories__item active' : 'categories__item'}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default React.memo(Categories);
