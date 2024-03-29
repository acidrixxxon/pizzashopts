import React from 'react';

import { useContextSelector } from '../../../Context/Context';
import OrderService from '../../../Services/OrderService';
import { IOrderFromServer } from '../../../types/OrderTypes';
import Spinner from '../../common/Icons/Spinner/Spinner';
import UserCabinetOrderItem from './UserCabinetOrderItem/UserCabinetOrderItem';
import './_UserCabinetOrders.scss';

const UserCabinetOrders: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [userOrders, setOrders] = React.useState<IOrderFromServer[] | null>(null);

  const { user } = useContextSelector();

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      if (user && user.tokens && user.tokens.accessToken) {
        const data = await OrderService.getUserOrders(user?.tokens?.accessToken);
        if (data.success === true) {
          setOrders(data.orders);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.tokens]);

  return (
    <div id='UserCabinet__Orders'>
      {loading && <Spinner className='userCabinet__spinner' />}
      {!loading && userOrders === null && <span>Ви ще не робили замовлень</span>}

      {userOrders !== null && userOrders.length > 0 && (
        <>
          <div className='userCabinet__table'>
            <div className='userCabinet__thead'>
              <div className='date th'>Дата</div>
              <div className='address th'>Адреса</div>
              <div className='phone th'>Номер телефону</div>
              <div className='price th'>Ціна</div>
              <div className='status th'>Статус</div>
              <div className='actions th'></div>
            </div>

            <div className='userCabinet__tbody'>
              {userOrders.map((item: IOrderFromServer) => (
                <UserCabinetOrderItem key={item._id} item={item} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserCabinetOrders;
