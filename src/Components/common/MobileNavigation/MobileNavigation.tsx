import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'

import MobileLogotype from '../Icons/MobileLogotype/MobileLogotype'
import './_MobileNavigation.scss'
import PizzaIcon from '../Icons/PizzaIcon'
import DrinkIcon from '../Icons/DrinkIcon'
import SideIcon from '../Icons/SideIcon'
import { Context1 } from '../../../Context/Context'

const MobileNavigation = () => {
    const menuItems = [{id: 0,title: 'Піци',icon: <PizzaIcon />},{id: 1,title: 'Сайди',icon: <SideIcon />},{id: 2,title: 'Напої',icon: <DrinkIcon />}]

    const [ showMenu,setShowMenu ] = React.useState<boolean>(false)

    const closeMenu = () => setShowMenu(false)

    const { actions: { setCategory,setSort }, state: { sort: { category } }} = React.useContext(Context1)

    const changeCategory = (id: number):void => {
        if (category !== id) {
            setCategory(id)
            setSort(0)
            closeMenu()
        }
    }

    return (
        <div id="mobilenav">
            <FiMenu className='mobilenav__hamburger' onClick={() => setShowMenu(true)} />

            <div className={showMenu ? 'mobilenav__menu visible' : 'mobilenav__menu'}>
                    <div className="mobilenav__header">
                        <MobileLogotype />

                        <AiOutlineClose className='mobilenav__closeIcon' onClick={closeMenu} />
                    </div>

                    <ul className="mobilenav__list">
                        {menuItems.map((item) => {
                            return (
                                <li className='mobilenav__item' key={item.id} onClick={() => changeCategory(item.id)}>
                                    {item.icon}
                                    {item.title}
                                </li>
                            )
                        })}
                    </ul>
                </div>
        </div>
    )
}

export default MobileNavigation