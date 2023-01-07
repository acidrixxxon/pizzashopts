import React, { memo } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { Context1 } from '../../Context/Context';
import { useStickyHeader } from '../../hooks/useStickyHeader';
import CartStatus from '../CartStatus/CartStatus';
import Search from '../Search/Search';
import UserCabinet from '../UserCabinet/UserCabinet';
import Container from '../common/Container/Container';
import Logotype from '../common/Icons/Logotype/Logotype';
import MobileNavigation from '../common/MobileNavigation/MobileNavigation';
import AuthModal from '../common/Modals/AuthModal/AuthModal';
import './_Header.scss';

const Header: React.FC = () => {
  const headerEl = React.useRef<HTMLDivElement | null>(null);

  useStickyHeader(headerEl);

  const {
    state: {
      user,
      view: {
        loaders: { refreshTokenLoading },
      },
    },
  } = React.useContext(Context1);

  return (
    <div id='header' ref={headerEl}>
      <div className='header__top'>
        <Container>
          <span>Середній час доставки: 28:00:00</span>

          {refreshTokenLoading === 'active' ? (
            <ThreeDots height='30' width='30' color='#fff' wrapperClass='header__loader' />
          ) : user ? (
            <UserCabinet />
          ) : (
            <AuthModal />
          )}
        </Container>
      </div>

      <div className='header__middle'>
        <Container>
          <div className='header__content'>
            <Logotype />

            <Search />

            <CartStatus />

            <MobileNavigation />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
