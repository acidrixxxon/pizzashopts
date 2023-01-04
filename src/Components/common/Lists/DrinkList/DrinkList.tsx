import React from 'react';

import { Context1 } from '../../../../Context/Context';
import ProductService from '../../../../Services/ProductService';
import { IDrinkCategory1, IDrinkCategoryResponse, IDrinkNew, IDrinkProductsResponse } from '../../../../types';
import ItemsList from '../../ItemsList/ItemsList';
import DrinkComponent from '../../ProductComponent/DrinkComponent/DrinkComponent';
import Skeleton from '../../Skeleton/Skeleton';

const DrinkList = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [categories, setCategories] = React.useState<IDrinkCategory1[] | null>(null);
  const [allProducts, setAllProducts] = React.useState<IDrinkNew[] | null>(null);

  const {
    state: {
      sort: { category, sort },
    },
  } = React.useContext(Context1);

  React.useEffect(() => {
    const getData = async () => {
      setLoading(true);

      if (sort === 0) {
        const response: IDrinkCategoryResponse = await ProductService.fetchDrinksCategories();

        if (response.success === true && response.categories !== undefined) {
          setAllProducts(null);
          setCategories(response.categories);
          setLoading(false);
        }
      } else {
        const response: IDrinkProductsResponse = await ProductService.fetchDrinksProducts(sort);

        if (response.products !== null && response.success === true && response.products !== undefined) {
          setCategories(null);
          setAllProducts(response.products);
          setLoading(false);
        }
      }
    };

    getData();
  }, [sort, category]);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div id='drink__list' className='list'>
          {sort === 0 &&
            categories?.map(({ products, title, _id }) => {
              if (products !== null && products.length > 0) {
                return (
                  <div className='side__category category' key={_id}>
                    <h4 className='side__categoryTitle category__title'>{title}</h4>

                    <ItemsList>
                      {products.map((product) => (
                        <DrinkComponent key={_id} item={product} />
                      ))}
                    </ItemsList>
                  </div>
                );
              }
            })}{' '}
          :
          <ItemsList>
            {allProducts !== null && allProducts.map((product) => <DrinkComponent key={product._id} item={product} />)}
          </ItemsList>
        </div>
      )}
    </>
  );
};

export default DrinkList;
