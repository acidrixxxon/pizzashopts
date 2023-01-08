import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Context1 } from '../../../../Context/Context';
import { getCartActions } from '../../../../Context/actions/cartActions';
import { ISide, ISideInCart } from '../../../../types';
import AddToCartBtn from '../../UI/Buttons/AddToCartBtn/AddToCartBtn';
import './../../../../scss/_productView.scss';

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
    <div className='product-component'>
      <Link to={`/product/${item._id}`} className='product-component__link'>
        <img src={item.imageUrl} alt={item.title} className='product-component__image' />
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

        <AddToCartBtn withRipple onClick={() => addToCartHandler(item)} />
      </div>
    </div>
  );
};

export default SideComponent;
