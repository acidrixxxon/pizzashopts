import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Context1, useContextSelector } from '../../../Context/Context';
import { getSortActions, getViewActions } from '../../../Context/actions';
import { useContextActions } from '../../../hooks/useContextActions';
import DrinkIcon from '../Icons/DrinkIcon';
import MobileLogotype from '../Icons/MobileLogotype/MobileLogotype';
import PizzaIcon from '../Icons/PizzaIcon';
import SideIcon from '../Icons/SideIcon';
import './_MobileNavigation.scss';
import UserMenu from './components/UserMenu/UserMenu';

const MobileNavigation = () => {
  const menuItems = [
    { id: 0, title: 'Піци', icon: <PizzaIcon /> },
    { id: 1, title: 'Сайди', icon: <SideIcon /> },
    { id: 2, title: 'Напої', icon: <DrinkIcon /> },
  ];

  const {
    sort: { category },
    user,
    view: {
      nav: { mobileNav },
    },
  } = useContextSelector();

  const {
    sortActions: { setCategory, setSort },
    viewActions: { setAuthModalStatus, toggleMobileNavVisibility },
  } = useContextActions();

  const closeMobileNav = () => toggleMobileNavVisibility('hidden');

  const changeCategoryHandler = (id: number): void => {
    if (category !== id) {
      setCategory(id);
      setSort(0);
      closeMobileNav();
    }
  };

  const authorizationHandler = () => {
    setAuthModalStatus('active');
    closeMobileNav();
  };
  return (
    <div id='mobilenav'>
      <FiMenu className='mobilenav__hamburger' onClick={() => toggleMobileNavVisibility('visible')} />

      <div className={mobileNav.status === 'visible' ? 'mobilenav__menu visible' : 'mobilenav__menu'}>
        <div className='mobilenav__header'>
          <MobileLogotype />

          <AiOutlineClose className='mobilenav__closeIcon' onClick={closeMobileNav} />
        </div>

        <div className='mobileNav__login'>
          {user ? (
            <UserMenu />
          ) : (
            <button className='mobileNav__login-button' onClick={authorizationHandler}>
              Увійти
            </button>
          )}
        </div>

        <ul className='mobilenav__list'>
          {menuItems.map((item) => {
            return (
              <Link to='/' className='mobilenav__item' key={item.id} onClick={() => changeCategoryHandler(item.id)}>
                {item.icon}
                {item.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigation;
