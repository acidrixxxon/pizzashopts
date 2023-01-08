import React from 'react';
import { Link } from 'react-router-dom';

import { Context1 } from '../../../Context/Context';
import { getViewActions } from '../../../Context/actions';
import { IDrinkMain, IPizzaMain, ISideMain } from '../../../types/ProductTypes';

interface ComponentProps {
  item: IDrinkMain | IPizzaMain | ISideMain;
  resetFunc: () => void;
}

const SearchResultItem: React.FC<ComponentProps> = ({ item, resetFunc }) => {
  const { dispatch } = React.useContext(Context1);

  const { setSearchResultModalData, setSearchResultModalVisibility } = getViewActions(dispatch);

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

      <li className='search__resultsItem-mobile' key={item._id}>
        <Link to={`/product/${item._id}`} className='search__results-content' onClick={resetFunc}>
          <div className='search__resultsImage'>
            <img src={item.imageUrl} alt={item.title} />
          </div>

          <div className='search__resultsContent'>
            <h4 className='search__resultsTitle'>{item.title}</h4>
          </div>
        </Link>
      </li>
    </>
  );
};

export default SearchResultItem;
