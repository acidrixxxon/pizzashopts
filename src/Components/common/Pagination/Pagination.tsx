import { FC } from 'react';

import { IPagination } from '../../../types/OtherTypes';
import './_Pagination.scss';

interface ComponentProps {
  data: IPagination;
  onChange: (page: number) => void;
}

const Pagination: FC<ComponentProps> = ({ data: { page, pagesCount }, onChange }) => {
  if (pagesCount === 1 || page === null || pagesCount === null) return null;

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
    </ul>
  );
};

export default Pagination;
