import classNames from 'classnames';
import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Components/Header/Header';
import Router from './Components/Router';
import { Context1 } from './Context/Context';
import { getUserActions } from './Context/actions/userActions';
import { useActivateAccount } from './hooks/useActivateAccount';
import { useCartChangesHandler } from './hooks/useCartChangesHandler';
import { useScrollTop } from './hooks/useScrollTop';
import { useSetCustomerData } from './hooks/useSetCustomerData';
import useSetSocket from './hooks/useSetSocket';
import './scss/_base.scss';

function App() {
  const {
    state: {
      view: {
        authModal,
        search: { searchResultModal },
      },
    },
    state,
    dispatch,
  } = React.useContext(Context1);
  console.log(state);
  const { refreshTokenProccess } = getUserActions(dispatch);

  React.useLayoutEffect(() => {
    refreshTokenProccess();
  }, []);

  const appEl = React.useRef<HTMLDivElement>(null);
  const appClassNames = classNames('App', { 'no-scroll': authModal.status === 'active' || searchResultModal.status === 'visible' });

  useActivateAccount();
  useCartChangesHandler();
  useSetCustomerData();
  useSetSocket();
  useScrollTop(appEl);

  return (
    <div className={appClassNames} ref={appEl}>
      <Header />
      <ToastContainer transition={Slide} />

      <Router />
    </div>
  );
}

export default App;
