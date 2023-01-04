import React from 'react';

import { Context1 } from '../../../../Context/Context';
import { sidesCategory } from '../../../../mockdata';
import ProductService from '../../../../Services/ProductService';
import { ISide, ISideCategory1, ISidesCategories } from '../../../../types';
import ItemsList from '../../ItemsList/ItemsList';
import SideComponent from '../../ProductComponent/SideComponent/SideComponent';
import Skeleton from '../../Skeleton/Skeleton';

const SideList: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [allProducts, setAllProducts] = React.useState<ISide[] | null>(null);
  const [categories, setCategories] = React.useState<ISideCategory1[] | null>(null);

  const {
    state: {
      sort: { category, sort },
      socket,
    },
  } = React.useContext(Context1);

  React.useEffect(() => {
    const getData = async () => {
      setLoading(true);

      if (sort === 0) {
        const response = await ProductService.fetchSidesCategories();

        if (response.success === true) {
          setCategories(response.categories);
          setLoading(false);
        }
      } else {
        const response = await ProductService.fetchSidesProducts(sort);

        if (response.success === true) {
          setAllProducts(response.products);
          setLoading(false);
        }
      }
    };

    getData();
  }, [sort, category]);

  React.useEffect(() => {
    socket.on('sidesCategories_change', (data: any) => {
      setCategories(data);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div id='side__list' className='list'>
          {sort === 0 && categories !== null ? (
            categories.map((cat) => {
              if (cat.products.length > 0 && cat.products !== null) {
                return (
                  <div className='side__category category' key={cat._id}>
                    <h4 className='side__categoryTitle category__title'>{cat.title}</h4>

                    <ItemsList>
                      {cat.products.map((prod) => (
                        <SideComponent item={prod} key={prod._id} />
                      ))}
                    </ItemsList>
                  </div>
                );
              }
            })
          ) : (
            <ItemsList>
              {allProducts !== null && allProducts.map((product) => <SideComponent key={product._id} item={product} />)}
            </ItemsList>
          )}
        </div>
      )}
    </>
  );
};

export default SideList;
