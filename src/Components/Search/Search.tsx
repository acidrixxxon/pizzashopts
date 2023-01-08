import { AnimatePresence, motion } from 'framer-motion';
import { debounce } from 'lodash';
import React from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

import SearchService from '../../Services/SearchService';
import useOutsideClick from '../../hooks/useOutsideClick';
import { IDrinkMain, IPizzaMain, ISideMain } from '../../types/ProductTypes';
import Spinner from '../common/Icons/Spinner/Spinner';
import AddToCartModal from '../common/Modals/AddToCartModal/AddToCartModal';
import SearchResultItem from './SearchResultItem/SearchResultItem';
import './_Search.scss';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [searchResults, setSearchResults] = React.useState<(IDrinkMain | IPizzaMain | ISideMain)[] | null>(null);
  const [loading, setLoading] = React.useState(false);

  const onInputChange = (value: string): void => {
    setSearchQuery(value);
    debounceFetchFunction(value);
  };

  const debounceFetchFunction = React.useCallback(
    debounce(async (value: string) => {
      setSearchResults(null);
      setLoading(true);
      const data = await SearchService.searchQuery(value);

      if (data.success === true && data.result) {
        setSearchResults(data.result);
      } else {
        setSearchResults([]);
      }
      setLoading(false);
    }, 250),
    [],
  );

  const searchEl = React.useRef<HTMLDivElement>(null);

  const resetAfterSearch = () => {
    setSearchQuery('');
    setSearchResults(null);
    setLoading(false);
  };

  useOutsideClick(searchEl, () => resetAfterSearch());

  return (
    <div id='search' ref={searchEl}>
      <div className='search__input'>
        <AiOutlineSearch className='search__searchIcon' />

        <input
          className='search__field'
          type='text'
          value={searchQuery}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder='Пошук піцци...'
        />

        {searchQuery !== '' && <AiOutlineClose className='search__clearIcon' onClick={resetAfterSearch} />}
      </div>

      {searchResults !== null || loading === true ? (
        <div className='search__results'>
          {loading && <Spinner />}

          {searchResults !== null && (
            <AnimatePresence>
              {searchResults.length > 0 ? (
                <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='search__resultsList'>
                  {searchResults.slice(0, 5).map((item) => (
                    <SearchResultItem item={item} key={item._id} resetFunc={resetAfterSearch} />
                  ))}
                </motion.ul>
              ) : (
                'Ничего не найдено'
              )}
            </AnimatePresence>
          )}
        </div>
      ) : null}

      <AddToCartModal />
    </div>
  );
};

export default Search;
