import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import MobileLogotype from '../Icons/MobileLogotype/MobileLogotype'
import './_MobileNavigation.scss'
import PizzaIcon from '../Icons/PizzaIcon'
import DrinkIcon from '../Icons/DrinkIcon'
import SideIcon from '../Icons/SideIcon'
import DesertIcon from '../Icons/DesertIcon'

const MobileNavigation = () => {
    const [ showMenu,setShowMenu ] = React.useState<boolean>(false)

    const closeMenu = () => setShowMenu(false)

    return (
        <div id="mobilenav">
            <FiMenu className='mobilenav__hamburger' onClick={() => setShowMenu(true)} />

            <div className={showMenu ? 'mobilenav__menu visible' : 'mobilenav__menu'}>
                    <div className="mobilenav__header">
                        <MobileLogotype />

                        <AiOutlineClose className='mobilenav__closeIcon' onClick={closeMenu} />
                    </div>

                    <ul className="mobilenav__list">
                        <li className="mobilenav__item">
                            <PizzaIcon />
                            Піци
                        </li>
                        <li className="mobilenav__item">
                            <DrinkIcon />
                            Сайди
                        </li>
                        <li className="mobilenav__item">
                            <SideIcon />
                            Напої
                        </li>
                        <li className="mobilenav__item">
                            <DesertIcon />
                            Десерти
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default MobileNavigation