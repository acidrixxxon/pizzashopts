import './scss/_base.scss';

import { Navigate, Route, Routes } from 'react-router-dom';

import CartPage from './Pages/Cart/CartPage';
import { Context1 } from './Context/Context';
import Dashboard from './Pages/AdminPanel/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import HomePage from './Pages/Home/HomePage';
import LocalStorageService from './Services/LocalStorageService';
import OrderStatus from './Pages/OrderDetails/OrderStatus';
import ProductPage from './Pages/Product/ProductPage';
import React from 'react';
import UserCabinetPage from './Pages/UserCabinetPage/UserCabinetPage';
import { io } from 'socket.io-client';
import { getUserActions } from './Context/actions/userActions';
import { getSocketActions } from './Context/actions';

function App() {
  const {
    state: {
      cart,
      view: { authModal },
      user,
      socket,
    },
    dispatch,
  } = React.useContext(Context1);
  const { setSocket } = getSocketActions(dispatch);

  const { refreshTokenProccess } = getUserActions(dispatch);

  React.useLayoutEffect(() => {
    refreshTokenProccess();
  }, []);

  const appEl = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const socket = io('http://localhost:3001');
    setSocket(socket);
  }, []);

  React.useEffect(() => {
    if (socket) {
      socket.on('recieve_message', (data: any) => console.log(data));
      socket.on('db_change', (data: any) => console.log(data));
      socket.on('sidesCategory_change', (data: any) => console.log(data));
    }
  }, []);

  React.useEffect(() => {
    const onScroll = (e: any) => {
      const scrollTop = window.scrollY;
      if (appEl !== null) {
        scrollTop >= 70 ? appEl.current?.classList.add('padding-top') : appEl.current?.classList.remove('padding-top');
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  React.useEffect(() => {
    LocalStorageService.saveCartUpdate(cart);
  }, [cart]);

  const resolveCabinetRoute = user !== null || LocalStorageService.getAccessToken() ? true : false;

  return (
    <div className={authModal.status === 'active' ? 'App no-scroll' : 'App'} ref={appEl}>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/order-status/:id' element={<OrderStatus />} />
        {user?.isAdmin && <Route path='/admin/dashboard' element={<Dashboard />} />}
        {resolveCabinetRoute && <Route path='/cabinet' element={<UserCabinetPage />} />}

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
