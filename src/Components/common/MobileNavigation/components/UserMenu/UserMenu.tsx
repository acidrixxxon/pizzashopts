import React from 'react';
import { Link } from 'react-router-dom';

import { useContextSelector } from '../../../../../Context/Context';
import { useContextActions } from '../../../../../hooks/useContextActions';
import './_UserMenu.scss';

const UserMenu = () => {
  const { user } = useContextSelector();

  const {
    userActions: { userLogoutProcess },
    viewActions: { toggleMobileNavVisibility },
  } = useContextActions();

  const linkClickHandler = () => {
    toggleMobileNavVisibility('hidden');
  };

  const logoutHandler = () => {
    userLogoutProcess();
    toggleMobileNavVisibility('hidden');
  };

  return (
    <div id='mobileNav__userMenu'>
      <ul className='userMenu__list'>
        <Link className='userMenu__link' to='/cabinet?state=profile' onClick={linkClickHandler}>
          <li className='userMenu__item'>Профіль</li>
        </Link>

        <Link className='userMenu__link' to='/cabinet?state=orders' onClick={linkClickHandler}>
          <li className='userMenu__item'>Мої замовлення</li>
        </Link>

        {user?.isAdmin && (
          <Link className='userMenu__link' to='/admin/dashboard' onClick={linkClickHandler}>
            <li className='userMenu__item'>Адмін панель</li>
          </Link>
        )}

        <li className='userMenu__link' onClick={logoutHandler}>
          Вихід
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
