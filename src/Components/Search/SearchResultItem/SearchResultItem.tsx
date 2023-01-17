import React from 'react';
import { Link } from 'react-router-dom';

import { useContextActions } from '../../../hooks/useContextActions';
import { IDrinkMain, IPizzaMain, ISideMain } from '../../../types/ProductTypes';

interface ComponentProps {
  item: IDrinkMain | IPizzaMain | ISideMain;
  resetFunc: () => void;
}

const SearchResultItem: React.FC<ComponentProps> = ({ item, resetFunc }) => {
  const {
    viewActions: { setSearchResultModalVisibility, setSearchResultModalData },
  } = useContextActions();

  const openSearchResultModal = () => {
    setSearchResultModalVisibility('visible');
    setSearchResultModalData({ ...item, defaultObj: item });
  };
  return (
    <>
      <li className='search__resultsItem' key={item._id}>
        <Link to={`/product/${item._id}`} className='search__resultsImage' onClick={resetFunc}>
          <img src={item.imageUrl} alt={item.title} />
        </Link>

        <div className='search__resultsContent'>
          <h4 className='search__resultsTitle'>{item.title}</h4>

          <button className='search__resultAddToCart' onClick={openSearchResultModal}>
            В кошик
          </button>
        </div>
      </li>

      <li className='search__resultsItem-mobile' key={item._id} onClick={openSearchResultModal}>
        <div className='search__resultsImage'>
          <img src={item.imageUrl} alt={item.title} />
        </div>

        <div className='search__resultsContent'>
          <h4 className='search__resultsTitle'>{item.title}</h4>
        </div>
      </li>
    </>
  );
};

export default SearchResultItem;
