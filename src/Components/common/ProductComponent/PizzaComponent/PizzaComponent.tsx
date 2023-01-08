import React from 'react';
import { Link } from 'react-router-dom';

import { Context1 } from '../../../../Context/Context';
import { getCartActions } from '../../../../Context/actions/cartActions';
import { getProductDto } from '../../../../Dto/CartDto';
import { useRippleButtonEffect } from '../../../../hooks/useRippleButtonEffect';
import { IPizzaMain } from '../../../../types/ProductTypes';
import AddToCartBtn from '../../UI/Buttons/AddToCartBtn/AddToCartBtn';
import NewProductIcon from '../../UI/Icons/NewProductIcon/NewProductIcon';
import './../../../../scss/_productView.scss';

interface ComponentProps {
  pizza: IPizzaMain;
}

const PizzaComponent: React.FC<ComponentProps> = ({ pizza }) => {
  const [activeSize, setActiveSize] = React.useState<number>(0);
  const [activeType, setActiveType] = React.useState<number>(0);

  const buttonRef = React.useRef<HTMLButtonElement>(null);

  useRippleButtonEffect(buttonRef);

  const changePizzaSize = (size: number): void => {
    setActiveSize(size);
    setActiveType(0);
  };

  const resetAllButtons = (): void => {
    setActiveSize(0);
    setActiveType(0);
  };

  const { dispatch, state } = React.useContext(Context1);
  const { addToCart } = getCartActions(dispatch, state);

  const addToCartHandler = (item: IPizzaMain): void => {
    const productObj = getProductDto(item, activeSize, activeType);

    if (productObj) {
      addToCart(productObj);
      resetAllButtons();
    } else {
      throw new Error('Не вдалось додати продукт до кошика!');
    }
  };

  return (
    <div className='product-component'>
      <Link to={`/product/${pizza._id}`} className='product-component__link'>
        <img src={pizza.imageUrl} alt='pizza-image1' className='product-component__image' />

        {pizza.aNewOne === true && <NewProductIcon />}
      </Link>

      <div className='product-component__details'>
        <Link className='product-component__title' to={`/product/${pizza._id}`}>
          {pizza.title}
        </Link>

        <p className='product-component__ingridients'>
          {pizza.ingridients.map(({ ingridientId, qty }, index) => {
            return (
              <span key={ingridientId._id}>
                {ingridientId.title}
                {qty > 1 && '(Подвійна порція)'}
                {pizza.ingridients.length === index + 1 ? null : ', '}
              </span>
            );
          })}
        </p>
      </div>

      <div className='product-component__variants pizza-component__variants'>
        <div className='product-component__list'>
          {pizza.variants.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => changePizzaSize(index)}
                className={
                  activeSize === index ? 'product-component__button product-component__button_active' : 'product-component__button'
                }>
                {item.title}
              </button>
            );
          })}
        </div>

        <div className='product-component__list'>
          {pizza.variants[activeSize].variants.map((item, index) => {
            return (
              <button
                key={index}
                disabled={!item.inSell}
                onClick={() => setActiveType(index)}
                className={
                  activeType === index ? 'product-component__button product-component__button_active' : 'product-component__button'
                }>
                {item.title}
              </button>
            );
          })}
        </div>
      </div>

      <div className='product-component__footer'>
        <div className='product-component__price'>
          <span className='price__number'>{pizza.variants[activeSize].variants[activeType].price}</span>
          <span className='price__text'>грн</span>
        </div>

        <AddToCartBtn withRipple onClick={() => addToCartHandler(pizza)} />
      </div>
    </div>
  );
};

export default PizzaComponent;
