import React from 'react';

import { Context1 } from '../../../../Context/Context';
import ProductService from '../../../../Services/ProductService';
import { IPizzaCategory, IPizzaMain } from '../../../../types/ProductTypes';
import ItemsList from '../../ItemsList/ItemsList';
import PizzaComponent from '../../ProductComponent/PizzaComponent/PizzaComponent';
import Skeleton from '../../Skeleton/Skeleton';
import './_PizzaList.scss';

const PizzaList: React.FC = () => {
  const [categories, setItems] = React.useState<IPizzaCategory[]>([]);
  const [allProducts, setAllProducts] = React.useState<IPizzaMain[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const {
    state: {
      sort: { category, sort },
    },
  } = React.useContext(Context1);

  React.useEffect(() => {
    const getData = async () => {
      setLoading(true);

      if (sort === 0) {
        const response = await ProductService.fetchPizzaCategories();

        if (response.success === true) {
          setItems(response.categories);
          setLoading(false);
        }
      } else {
        const response = await ProductService.fetchPizzaProducts(sort);

        if (response.success === true) {
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
        <div className='pizza__list list'>
          {sort === 0 ? (
            categories.map((category) => {
              if (category.products !== undefined && category.products?.length > 0) {
                return (
                  <div className='pizza__category' key={category._id}>
                    <h4 className='pizza__categoryTitle'>Піца: {category.title}</h4>

                    <ItemsList>
                      {category.products.map((item) => (
                        <PizzaComponent key={item._id} pizza={item} />
                      ))}
                    </ItemsList>
                  </div>
                );
              }
            })
          ) : (
            <ItemsList>{allProducts !== null && allProducts.map((item) => <PizzaComponent key={item._id} pizza={item} />)}</ItemsList>
          )}
        </div>
      )}
    </>
  );
};

export default PizzaList;
