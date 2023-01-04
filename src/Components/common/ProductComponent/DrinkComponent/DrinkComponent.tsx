import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Context1 } from '../../../../Context/Context';
import { getCartActions } from '../../../../Context/actions/cartActions';
import { IDrinkInCart, IDrinkNew } from '../../../../types';
import NewProductIcon from '../../NewProductIcon/NewProductIcon';
import './../../../../scss/_productView.scss';

interface ComponentProps {
  item: IDrinkNew;
}

const DrinkComponent: React.FC<ComponentProps> = ({ item }) => {
  const [activeSize, setActiveSize] = React.useState<number>(0);

  const { dispatch, state } = React.useContext(Context1);
  const { addToCart } = getCartActions(dispatch, state);

  const addToCartHandler = (item: IDrinkNew): void => {
    const productObj: IDrinkInCart = {
      _id: item.variants[activeSize]._id,
      uniqueId: uuidv4(),
      size: item.variants[activeSize].size,
      price: item.variants[activeSize].price,
      title: item.title,
      qty: 1,
      category: item.category,
      class: 2,
      imageUrl: item.imageUrl,
    };

    addToCart(productObj);
    setActiveSize(0);
  };

  return (
    <div className='product-component drink-component'>
      <Link to={`/product/${item._id}`} className='product-component__link'>
        <img src={item.imageUrl} alt={item.title} className='product-component__image' />

        {item.newProduct === true && <NewProductIcon />}
      </Link>

      <div className='product-component__details'>
        <Link to={`/product/${item._id}`} className='product-component__title'>
          {item.title}
        </Link>
      </div>

      <div className='product-component__variants'>
        <div className='product-component__list'>
          {item.variants.map((variant, index) => {
            return (
              <button
                key={index}
                onClick={() => setActiveSize(index)}
                className={
                  activeSize === index ? 'product-component__button product-component__button_active' : 'product-component__button'
                }>
                {variant.size}
              </button>
            );
          })}
        </div>
      </div>

      <div className='product-component__footer'>
        <div className='product-component__price'>
          <span className='price__number'>{item.variants[activeSize].price} </span>
          <span className='price__text'>грн</span>
        </div>

        <button className='product-component__toCartButton' onClick={() => addToCartHandler(item)}>
          В кошик
        </button>
      </div>
    </div>
  );
};

export default DrinkComponent;
