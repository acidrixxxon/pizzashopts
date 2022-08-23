import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import MobileLogotype from '../Icons/MobileLogotype/MobileLogotype'
import './_MobileNavigation.scss'
import PizzaIcon from '../Icons/PizzaIcon'
import DrinkIcon from '../Icons/DrinkIcon'
import SideIcon from '../Icons/SideIcon'
import DesertIcon from '../Icons/DesertIcon'
import { Context } from '../../../Context'

const MobileNavigation = () => {
    const menuItems = [{id: 0,title: 'Піци',icon: <PizzaIcon />},{id: 1,title: 'Сайди',icon: <SideIcon />},{id: 3,title: 'Напої',icon: <DrinkIcon />},{id: 4,title: 'Десерти',icon: <DesertIcon />}]

    const [ showMenu,setShowMenu ] = React.useState<boolean>(false)

    const closeMenu = () => setShowMenu(false)

    const { dispatch,state: { category } } = React.useContext(Context)

    const changeCategory = (id: number):void => {
        if (category !== id) {
            dispatch({type: 'SET_CATEGORY',payload: id})
            dispatch({type: 'SET_SORT',payload: 0})
            setShowMenu(false)
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