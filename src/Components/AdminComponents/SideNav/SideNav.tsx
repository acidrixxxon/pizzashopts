import React from 'react'
import { AiOutlineDashboard } from 'react-icons/ai'
import './_SideNav.scss'
import { TbBrandProducthunt } from 'react-icons/tb'


interface ComponentProps {
  tab: number,
  setTab: any
}


const SideNav:React.FC<ComponentProps> = ({ tab,setTab }) => {
  return (
    <div id="adminSideNavigation">
      <ul className="sideNav__list">
        <li className={tab === 0 ? "sideNav__list-item active" : "sideNav__list-item"} onClick={() => setTab(0)}>
          <AiOutlineDashboard className='sideNav__list-itemIcon'/>
          Головна
        </li>
        <li className={tab === 1 ? "sideNav__list-item active" : "sideNav__list-item"} onClick={() => setTab(1)}>
          <TbBrandProducthunt className='sideNav__list-itemIcon'/>
          Продукти
        </li>
      </ul>
    </div>
  )
}

export default SideNav