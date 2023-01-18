import classNames from 'classnames';
import { FC } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import { IPagination } from '../../../types/OtherTypes';
import './_Pagination.scss';

interface ComponentProps {
  data: IPagination;
  onChange: (page: number) => void;
}

const Pagination: FC<ComponentProps> = ({ data: { page, pagesCount }, onChange }) => {
  if (pagesCount === 1 || page === null || pagesCount === null) return null;

  const nextPageHandler = () => {
    if (page === pagesCount) return;
    onChange(page + 1);
  };

  const prevPageHandler = () => {
    if (page === 1) return;
    onChange(page - 1);
  };
  return (
    <ul className='pagination'>
      {[...Array(pagesCount)].map((item, index) => {
        const value = Number(index) + 1;
        return (
          <li className={page === value ? 'pagination__item active' : 'pagination__item'} key={index} onClick={() => onChange(value)}>
            {Number(index) + 1}
          </li>
        );
      })}

      <li
        onClick={prevPageHandler}
        className={classNames('pagination__item', 'pagination__mobile', 'pagination__mobile-prev', {
          'pagination__mobile-disabled': page === 1,
        })}>
        Назад
      </li>

      <li
        onClick={nextPageHandler}
        className={classNames('pagination__item', 'pagination__mobile', 'pagination__mobile-next', {
          'pagination__mobile-disabled': page === pagesCount,
        })}>
        Далі
      </li>
    </ul>
  );
};

export default Pagination;
