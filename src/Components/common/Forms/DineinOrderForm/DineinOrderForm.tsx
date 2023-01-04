import React from 'react';

import { getCustomerDataActions } from '../../../../Context/actions';
import { Context1 } from '../../../../Context/Context';
import ProductService from '../../../../Services/ProductService';
import { ICity } from '../../../../types';
import Error from '../../Error/Error';
import PaymentType from '../../PaymentType/PaymentType';

import './_DineinOrderForm.scss';

const DineinOrderForm: React.FC = () => {
  const [restaurants, setRestaurants] = React.useState<ICity[] | null>(null);
  const [showCity, setShowCity] = React.useState<boolean>(false);
  const [showRestaurants, setShowRestaurants] = React.useState<boolean>(false);

  const {
    state: { customerData },
    dispatch,
  } = React.useContext(Context1);
  const { setCustomerData, setFieldError } = getCustomerDataActions(dispatch);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await ProductService.getRestaurants();
      setRestaurants(data);
    };

    fetchData();
  }, []);

  const showCityListHandler = () => {
    setShowCity((state) => !state);
    setFieldError({ ...customerData.errors, city: null, restaurant: null });
  };

  const showRestaurantsListHandler = () => {
    setShowRestaurants((state) => !state);
    setFieldError({ ...customerData.errors, restaurant: null });
  };

  const showCityList = showCity && restaurants !== null && restaurants?.length > 0;
  const showRestaurantsList = customerData.city;

  return (
    <div id='dineinform'>
      <div className='dineinform__group'>
        <h4 className='dineinform____title'>Місто</h4>

        <div className='dineinform__list' onClick={showCityListHandler}>
          <span className={customerData.city ? 'dineinform__list-placeholder active' : 'dineinform__list-placeholder'}>
            {customerData.city ? customerData.city.name : 'Виберіть місто'}
          </span>

          <svg
            width='10'
            className={showCity ? 'rotated' : ''}
            height='6'
            viewBox='0 0 10 6'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              style={customerData.city ? { fill: '#4f4f4f' } : {}}
              d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
              fill='#2C2C2C'></path>
          </svg>

          {showCityList && (
            <ul className='dineinform__itemList'>
              {restaurants.map((item) => (
                <li className='dineinform__item' key={item.id}>
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Error className='deliveryform__inputError' value={customerData.errors.city} />
      </div>

      {showRestaurantsList && (
        <>
          <div className='dineinform__group'>
            <h4 className='dineinform__title'>Ресторан</h4>

            <div className='dineinform__list' onClick={showRestaurantsListHandler}>
              <span className={customerData.restaurant ? 'dineinform__list-placeholder active' : 'dineinform__list-placeholder'}>
                {customerData.restaurant ? customerData.restaurant.address : 'Виберіть ресторан'}
              </span>

              <svg
                width='10'
                className={showRestaurants ? 'rotated' : ''}
                height='6'
                viewBox='0 0 10 6'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  style={customerData.restaurant ? { fill: '#4f4f4f' } : {}}
                  d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
                  fill='#2C2C2C'></path>
              </svg>

              {showRestaurants && (
                <ul className='dineinform__itemList'>
                  {restaurants
                    ?.find((item) =>
                      customerData.city !== undefined && customerData.city !== null ? item.id === customerData.city.id : null,
                    )
                    ?.restaurants.map((item) => (
                      <li className='dineinform__item' key={item.id}>
                        {item.address}
                      </li>
                    ))}
                </ul>
              )}
            </div>
            {customerData.city !== null && <Error className='deliveryform__inputError' value={customerData.errors.restaurant} />}
          </div>
        </>
      )}

      <PaymentType />
    </div>
  );
};

export default DineinOrderForm;
