import { AnimatePresence,motion } from 'framer-motion'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'

import { Context1 } from '../../Context/Context'
import useOutsideClick from '../../hooks/useOutsideClick'
import './_UserCabinet.scss'

const UserCabinet:React.FC = () => {
  const [ showDropdown,setShowDropdown ] = React.useState<boolean>(false)
  const dropdownEl = React.useRef<HTMLDivElement>(null)

  const { state: { user },actions: { userLogoutProcess }} = React.useContext(Context1)
  
  useOutsideClick(dropdownEl,() => setShowDropdown(false))

  const userLogout = () => {
    userLogoutProcess()
    if(user === null) setShowDropdown(false)
  }
  return (
    <div id="userCabinet" ref={dropdownEl}>
      <div className="userCabinet__content" onClick={() => setShowDropdown(state => !state)}>
        {user?.email}

        <IoIosArrowDown className={showDropdown ? 'userCabinet__arrow rotated': 'userCabinet__arrow'} />
      </div>

      <AnimatePresence>
        {showDropdown && (        
          <motion.div       
            initial={{ maxHeight: '0px'}}
            animate={{ maxHeight:'200px'}}
            exit={{maxHeight: '0'}}
            className="userCabinet__dropdown">
              <ul className="userCabinet__list">
                <Link to="/cabinet?state=profile" onClick={() => setShowDropdown(false)} className='userCabinet__list-link'>
                  <li className="userCabinet__list-item">
                    Профіль
                  </li>
                  </Link>
                  <Link to="/cabinet?state=orders" onClick={() => setShowDropdown(false)} className='userCabinet__list-link'>
                    <li className="userCabinet__list-item">
                      Замовлення
                    </li>
                  </Link>
                {user?.isAdmin && 
                  <Link to="/admin/dashboard" onClick={() => setShowDropdown(false)} className='userCabinet__list-link'>
                    <li className="userCabinet__list-item">
                        Адмін панель
                    </li>
                  </Link>}
                <li className="userCabinet__list-link" onClick={userLogout}>
                  Вихід
                </li>
              </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default UserCabinet