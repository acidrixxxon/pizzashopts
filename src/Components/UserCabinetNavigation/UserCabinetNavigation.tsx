import React from 'react'
import './_UserCabinetNavigation.scss'

interface ComponentProps {
  state: string,
  changeTab: (tab: string) => void
}

const UserCabinetNavigation:React.FC<ComponentProps> = ({ state,changeTab }) => {
  return (
    <div id="UserCabinet__navigation">

      <ul className="userCabinet__list">
        <li onClick={() => changeTab('profile')} className={state === 'profile' ? "userCabinet__item active" : "userCabinet__item"}>Профіль</li>
        <li onClick={() => changeTab('orders')} className={state === 'orders' ? "userCabinet__item active" : "userCabinet__item"}>Замовлення</li>
      </ul>
    </div>
  )
}

export default UserCabinetNavigation