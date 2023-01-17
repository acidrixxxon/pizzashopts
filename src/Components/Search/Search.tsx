import { AnimatePresence, motion } from 'framer-motion';
import { debounce } from 'lodash';
import React from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

import SearchService from '../../Services/SearchService';
import useOutsideClick from '../../hooks/useOutsideClick';
import { IPagination } from '../../types/OtherTypes';
import { IDrinkMain, IPizzaMain, ISideMain } from '../../types/ProductTypes';
import Spinner from '../common/Icons/Spinner/Spinner';
import AddToCartModal from '../common/Modals/AddToCartModal/AddToCartModal';
import Pagination from '../common/Pagination/Pagination';
import SearchResultItem from './SearchResultItem/SearchResultItem';
import './_Search.scss';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [searchResults, setSearchResults] = React.useState<(IDrinkMain | IPizzaMain | ISideMain)[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [pagination, setPagination] = React.useState<IPagination>({
    limit: 3,
    pagesCount: null,
    page: null,
  });

  console.log(pagination);

  const onInputChange = (value: string): void => {
    setSearchQuery(value);
    debounceFetchFunction(value);
  };

  // const debounceFetchFunction = React.useCallback(
  //   debounce(async (value: string) => {
  //     setSearchResults(null);
  //     setLoading(true);
  //     const data = await SearchService.searchQuery(value);

  //     if (data.success === true && data.result) {
  //       setSearchResults(data.result);
  //       setPagination({ limit: data.pagination.limit, pagesCount: data.pagination.pagesCount, page: data.pagination.page });
  //     } else {
  //       setSearchResults([]);
  //     }
  //     setLoading(false);
  //   }, 250),
  //   [],
  // );

  const debounceFetchFunction = React.useCallback(
    debounce(async (value: string) => fetchData(value), 250),
    [],
  );

  const onPageChange = (page: number) => {
    setPagination((state) => {
      return {
        ...state,
        page,
      };
    });
    fetchData(searchQuery, page);
  };

  const fetchData = async (value: string, page = 1) => {
    setSearchResults(null);
    setLoading(true);

    const data = await SearchService.searchQuery(value, page);

    if (data.success === true && data.result) {
      setSearchResults(data.result);
      setPagination({ limit: data.pagination.limit, pagesCount: data.pagination.pagesCount, page: data.pagination.page });
    } else {
      setSearchResults([]);
    }
    setLoading(false);
  };

  const searchEl = React.useRef<HTMLDivElement>(null);

  const resetAfterSearch = () => {
    console.log('da');
    setSearchQuery('');
    setSearchResults(null);
    setLoading(false);
  };

  useOutsideClick(searchEl, resetAfterSearch);

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

      <AnimatePresence>
        {searchResults !== null || loading === true ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ visibility: 'hidden' }} className='search__results'>
            {loading && <Spinner />}

            {searchResults !== null &&
              (searchResults.length > 0 ? (
                <ul className='search__resultsList'>
                  {searchResults.slice(0, 5).map((item) => (
                    <SearchResultItem item={item} key={item._id} resetFunc={resetAfterSearch} />
                  ))}
                  <Pagination data={pagination} onChange={onPageChange} />
                </ul>
              ) : (
                'Ничего не найдено'
              ))}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AddToCartModal />
    </div>
  );
};

export default Search;
