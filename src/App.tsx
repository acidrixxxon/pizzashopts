import classNames from 'classnames';
import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Components/Header/Header';
import Router from './Components/Router';
import { useContextActions, useContextSelector } from './hooks';
import { useInitApp } from './hooks/useInitApp';
import './scss/_base.scss';

function App() {
  const appEl = React.useRef<HTMLDivElement>(null);
  // console.log(state);
  const {
    userActions: { refreshTokenProccess },
  } = useContextActions();

  const {
    view: {
      authModal,
      search: { searchResultModal },
    },
  } = useContextSelector();

  React.useLayoutEffect(() => {
    refreshTokenProccess();
  }, []);

  useInitApp();

  const appClassNames = classNames('App', { 'no-scroll': authModal.status === 'active' || searchResultModal.status === 'visible' });

  return (
    <div className={appClassNames} ref={appEl}>
      <Header />
      <ToastContainer transition={Slide} />

      <Router />
    </div>
  );
}

export default App;
