import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Context1 } from '../../../Context/Context';
import { getSortActions, getViewActions } from '../../../Context/actions';
import DrinkIcon from '../Icons/DrinkIcon';
import MobileLogotype from '../Icons/MobileLogotype/MobileLogotype';
import PizzaIcon from '../Icons/PizzaIcon';
import SideIcon from '../Icons/SideIcon';
import './_MobileNavigation.scss';

const MobileNavigation = () => {
  const menuItems = [
    { id: 0, title: 'Піци', icon: <PizzaIcon /> },
    { id: 1, title: 'Сайди', icon: <SideIcon /> },
    { id: 2, title: 'Напої', icon: <DrinkIcon /> },
  ];

  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const closeMenu = () => setShowMenu(false);

  const {
    dispatch,
    state: {
      sort: { category },
    },
  } = React.useContext(Context1);

  const { setCategory, setSort } = getSortActions(dispatch);
  const { setAuthModalStatus } = getViewActions(dispatch);

  const changeCategoryHandler = (id: number): void => {
    if (category !== id) {
      setCategory(id);
      setSort(0);
      closeMenu();
    }
  };

  const authorizationHandler = () => {
    setAuthModalStatus('active');
    closeMenu();
  };

  return (
    <div id='mobilenav'>
      <FiMenu className='mobilenav__hamburger' onClick={() => setShowMenu(true)} />

      <div className={showMenu ? 'mobilenav__menu visible' : 'mobilenav__menu'}>
        <div className='mobilenav__header'>
          <MobileLogotype />

          <AiOutlineClose className='mobilenav__closeIcon' onClick={closeMenu} />
        </div>

        <div className='mobileNav__login'>
          <button className='mobileNav__login-button' onClick={authorizationHandler}>
            Увійти
          </button>
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
