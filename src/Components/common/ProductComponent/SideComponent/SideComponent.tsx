import React from 'react';
import { Link } from 'react-router-dom';

import { Context1 } from '../../../../Context/Context';
import { ISide, ISideInCart } from '../../../../types';

import './_SideComponent.scss';
import { v4 as uuidv4 } from 'uuid';
import { getCartActions } from '../../../../Context/actions/cartActions';

interface ComponentProps {
  item: ISide;
}

const SideComponent: React.FC<ComponentProps> = ({ item }) => {
  const [activeSize, setActiveSize] = React.useState<number>(0);

  const { dispatch, state } = React.useContext(Context1);
  const { addToCart } = getCartActions(dispatch, state);

  const addToCartHandler = (item: ISide): void => {
    const productObj: ISideInCart = {
      _id: item.variants[activeSize]._id,
      uniqueId: uuidv4(),
      class: 1,
      imageUrl: item.imageUrl,
      title: item.title,
      size: item.variants[activeSize].size,
      price: item.variants[activeSize].price,
      category: item.category,
      qty: 1,
    };

    addToCart(productObj);
    setActiveSize(0);
  };

  return (
    <div id='side'>
      <Link to={`/product/${item._id}`} className='side__image'>
        <img src={item.imageUrl} alt={item.title} />
      </Link>

      <Link to={`/product/${item._id}`} className='side__title'>
        <h4>{item.title}</h4>
      </Link>

      <div className='side__variants'>
        {item.variants.map((variant, index) => {
          return (
            <button
              key={index}
              onClick={() => setActiveSize(index)}
              className={activeSize === index ? 'side__variantBtn active' : 'side__variantBtn'}>
              {variant.size}
            </button>
          );
        })}
      </div>

      <div className='side__footer'>
        <div className='side__price'>
          <span className='side__priceNumber'>{item.variants[activeSize].price} </span>
          <span className='side__priceText'>грн</span>
        </div>

        <button className='side__addToCart' onClick={() => addToCartHandler(item)}>
          В кошик
        </button>
      </div>
    </div>
  );
};

export default SideComponent;
