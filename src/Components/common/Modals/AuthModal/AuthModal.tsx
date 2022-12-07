import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import ReactPortal from '../../ReactPortal/ReactPortal';

import './_AuthModal.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

import LoginForm from '../../Forms/LoginForm/LoginForm';
import RegisterForm from '../../Forms/RegisterForm/RegisterForm';
import { Context1 } from '../../../../Context/Context';
import { getViewActions } from '../../../../Context/actions';

const AuthModal = () => {
  const [authType, setAuthType] = React.useState<string>('login');

  const {
    dispatch,
    state: { view },
  } = React.useContext(Context1);
  const { setAuthModalStatus } = getViewActions(dispatch);

  const openAuthModal = () => {
    setAuthModalStatus('active');
  };

  const closeAuthModal = () => {
    setAuthModalStatus('inactive');
  };

  return (
    <div id='authModal'>
      <span className='authModal__button' onClick={openAuthModal}>
        <FiLogIn />
        Увійти
      </span>

      <AnimatePresence>
        {view.authModal.status === 'active' && (
          <ReactPortal wrapperId='root'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='authModal__overlay'
              onClick={closeAuthModal}>
              <motion.div
                initial={{ transform: 'scale(0)' }}
                animate={{ transform: 'scale(1)' }}
                exit={{ transform: 'scale(0)' }}
                className='authModal__content'
                onClick={(e) => e.stopPropagation()}>
                <button className='authModal__closeBtn' onClick={closeAuthModal}>
                  <AiOutlineClose className='authModal__closeBtn-icon' />
                </button>

                <div className='authModal__header'>
                  <button
                    className={authType === 'login' ? 'authModal__variant active' : 'authModal__variant'}
                    onClick={() => setAuthType('login')}>
                    Вхід
                  </button>
                  <button
                    className={authType === 'register' ? 'authModal__variant active' : 'authModal__variant'}
                    onClick={() => setAuthType('register')}>
                    Реєстрація
                  </button>
                </div>

                <div className='authModal__main'>
                  <AnimatePresence>{authType === 'login' ? <LoginForm /> : <RegisterForm />}</AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          </ReactPortal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AuthModal;
