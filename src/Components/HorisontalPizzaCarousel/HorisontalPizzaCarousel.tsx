import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { Context1 } from '../../Context/Context';
import ProductService from '../../Services/ProductService';
import { IPizzaMain } from '../../types/ProductTypes';
import Spinner from '../common/Icons/Spinner/Spinner';
import './_HorisontalPizzaCarousel.scss';

const HorisontalPizzaCarousel: React.FC = () => {
  const [items, setItems] = React.useState<IPizzaMain[] | []>([]);
  const [fetching, setFetching] = React.useState<boolean>(false);
  const [offsetX, setOffsetX] = React.useState<number>(0);
  const [idx, setIdx] = React.useState<number>(0);

  const itemRef = React.useRef<HTMLUListElement>(null);
  const listQty: number | null = items.length > 0 ? Math.round(items.length / 5) : null;

  const {
    state: { productDetails },
  } = React.useContext(Context1);

  const offsetWidth: number = itemRef.current ? itemRef.current.offsetWidth : 0;

  const carouselInit = async () => {
    setFetching(true);
    const data = await ProductService.fetchProducts(0, 0);
    if (data) {
      setItems(data);
      setFetching(false);
    }
  };

  const nextPage = () => setIdx((state) => state + 1);
  const prevPage = () => setIdx((state) => (state > 0 ? state - 1 : 0));

  React.useEffect(() => {
    carouselInit();
  }, []);

  if (fetching) return <Spinner className='carousel__loader' />;

  return (
    <div className='carousel__container'>
      <div id='carousel'>
        {fetching ? (
          <Spinner className='carousel__loader' />
        ) : (
          <>
            <h4 className='carousel__title'>Інші продукти</h4>

            <div className='carousel__wrapper'>
              <ul className='carousel__list' style={{ transform: `translate3d(-${offsetWidth * idx}px,0,0)` }} ref={itemRef}>
                {items.length > 0 &&
                  items.map((item, idx) => {
                    return (
                      <Link className='carousel__link' to={`/product/${item._id}`} key={item._id}>
                        <li className='carousel__item'>
                          <img src={item.imageUrl} alt='' className='carousel__itemImage' />
                        </li>
                      </Link>
                    );
                  })}
              </ul>
            </div>
          </>
        )}
      </div>

      {idx <= items.length && idx + 1 !== listQty ? (
        <span className='carousel__controller arrow__next' onClick={nextPage}>
          <IoIosArrowForward />
        </span>
      ) : null}
      {idx > 0 && idx + 1 !== 1 ? (
        <span className='carousel__controller arrow__prev' onClick={prevPage}>
          <IoIosArrowBack />
        </span>
      ) : null}
    </div>
  );
};

export default HorisontalPizzaCarousel;
