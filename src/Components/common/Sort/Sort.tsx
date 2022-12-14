import React from 'react';

import { getSortActions } from '../../../Context/actions';
import { Context1 } from '../../../Context/Context';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { ISortVariant } from '../../../types';

import './_Sort.scss';

const Sort = () => {
  const sortVariants: ISortVariant[] = [
    { id: 0, title: 'популярністю' },
    { id: 1, title: 'ціною (найдорожчі)' },
    { id: 2, title: 'ціною (дешевші)' },
  ];
  const [visibleSortMenu, setVisibleSortMenu] = React.useState<boolean>(false);

  const {
    state: {
      sort: { sort, category },
    },
    dispatch,
  } = React.useContext(Context1);
  const { setSort } = getSortActions(dispatch);

  const sortEl = React.useRef<HTMLDivElement>(null);

  useOutsideClick(sortEl, () => setVisibleSortMenu(false));

  const toggleSortMenu = (): void => setVisibleSortMenu((state) => !state);

  const onSortChange = (id: number): void => {
    setSort(id);
    setVisibleSortMenu(false);
  };

  React.useEffect(() => {
    setSort(0);
  }, [category]);

  return (
    <div id='sort' ref={sortEl}>
      <span className='sort__label'>
        <svg
          width='10'
          className={visibleSortMenu ? 'rotated' : ''}
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'></path>
        </svg>
        Сортування за:
      </span>

      <span className='sort__title' onClick={toggleSortMenu}>
        {sortVariants[sort].title}
      </span>

      {visibleSortMenu && (
        <ul className='sort__list'>
          {sortVariants.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => onSortChange(item.id)}
                className={sort === item.id ? 'sort__item active' : 'sort__item'}>
                {item.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Sort;
