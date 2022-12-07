import './_UserCabinetOrderItem.scss';

import { AnimatePresence, motion } from 'framer-motion';
import { IDeliveryInCart, IDrinkInCart, IPizzaInCart, ISideInCart } from '../../../../types';
import { IOrderCart, IOrderFromServer } from '../../../../types/OrderTypes';

import { Context1 } from '../../../../Context/Context';
import React from 'react';
import dateFormat from 'dateformat';
import { useNavigate } from 'react-router-dom';
import { getCartActions } from '../../../../Context/actions';

interface ComponentProps {
  item: IOrderFromServer;
}

const UserCabinetOrderItem: React.FC<ComponentProps> = ({ item }) => {
  const [showDetails, setShowDetails] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const { dispatch } = React.useContext(Context1);
  const { reorderToCart } = getCartActions(dispatch);

  const reorderHandler = (cart: IOrderCart): void => {
    reorderToCart(cart);

    navigate('/cart');
  };

  return (
    <div className='userCabinet__item'>
      <div className='userCabinet__trow'>
        <div className='date th'>{dateFormat(item.createdAt, 'mm/dd/yyyy, HH:MM:ss')}</div>

        <div className='address th'>
          {item.details.customerData.street && item.details.customerData.street + ', '}
          {item.details.customerData.house && item.details.customerData.house + ' буд, '}
          {item.details.customerData.floor && item.details.customerData.floor + ' поверх, '}
          {item.details.customerData.room && item.details.customerData.room + ' кв'}
        </div>

        <div className='phone th'>{item.details.customerData.phone}</div>

        <div className='price th'>
          <span>{item.cart.totalCost}</span> грн
        </div>

        <div className='status th'>{item.status.title}</div>

        <div className='actions th'>
          <button
            onClick={() => setShowDetails((state) => !state)}
            className={showDetails ? 'actions__detailsBtn active' : 'actions__detailsBtn'}>
            Деталі
          </button>

          <button className='actions__reorderBtn' onClick={() => reorderHandler(item.cart)}>
            Повторити
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showDetails && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            className='userCabinet__cartItems'>
            {item.cart.items.map((item: IPizzaInCart | IDrinkInCart | ISideInCart | IDeliveryInCart) => {
              console.log(item);

              if (item.title === 'Доставка')
                return (
                  <li className='userCabinet__cartItem' key={item._id}>
                    <div className='userCabinet__imageContainer'>
                      <img
                        src='https://media.dominos.ua/__sized__/menu/product_osg_image/2022/04/29/delivery-thumbnail-2300x2300.png'
                        alt='image'
                        className='userCabinet__image'
                      />
                    </div>

                    <div className='userCabinet__data'>
                      <h4 className='userCabinet__title'>{item.title}</h4>
                    </div>
                  </li>
                );
              return (
                <li className='userCabinet__cartItem' key={item._id}>
                  <div className='userCabinet__imageContainer'>
                    <img src={item.imageUrl} alt='item image' className='userCabinet__image' />

                    <div className='userCabinet__qty'>{item.qty}</div>
                  </div>

                  <div className='userCabinet__data'>
                    <h4 className='userCabinet__title'>
                      {item.class === 0 && item.fulltitle}
                      {item.class === 1 && `${item.title}(${item.size})`}
                      {item.class === 2 && `${item.title}(${item.size})`}
                    </h4>
                  </div>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserCabinetOrderItem;
