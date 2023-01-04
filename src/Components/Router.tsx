import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Context1 } from '../Context/Context';
import Dashboard from '../Pages/AdminPanel/Dashboard/Dashboard';
import CartPage from '../Pages/Cart/CartPage';
import HomePage from '../Pages/Home/HomePage';
import OrderStatus from '../Pages/OrderDetails/OrderStatus';
import ProductPage from '../Pages/Product/ProductPage';
import UserCabinetPage from '../Pages/UserCabinetPage/UserCabinetPage';
import LocalStorageService from '../Services/LocalStorageService';

const Router = () => {
  const {
    state: { user },
  } = React.useContext(Context1);

  const resolveCabinetRoute = user !== null || LocalStorageService.getAccessToken() ? true : false;
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/order-status/:id' element={<OrderStatus />} />
      {user?.isAdmin && <Route path='/admin/dashboard' element={<Dashboard />} />}
      {resolveCabinetRoute && <Route path='/cabinet' element={<UserCabinetPage />} />}

      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default Router;
