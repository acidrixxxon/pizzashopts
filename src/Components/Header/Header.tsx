import React from 'react'

import { useStickyHeader } from '../../hooks/useStickyHeader'
import CartStatus from '../CartStatus/CartStatus'
import Container from '../common/Container/Container'
import Logotype from '../common/Icons/Logotype/Logotype'
import MobileNavigation from '../common/MobileNavigation/MobileNavigation'
import Search from '../Search/Search'
import './_Header.scss' 
import AuthModal from '../common/Modals/AuthModal/AuthModal'
import { Context1 } from '../../Context/Context'
import UserCabinet from '../UserCabinet/UserCabinet'

const Header: React.FC = () => {
  const headerEl = React.useRef<HTMLDivElement | null>(null)

  useStickyHeader(headerEl)

  const { state: { user }} = React.useContext(Context1)

  return (
    <div id="header" ref={headerEl}>
      <div className="header__top">
        <Container>
          <span>Середній час доставки: 28:00:00</span>

          {user ? <UserCabinet /> : <AuthModal />}
        </Container>
      </div>

      <div className="header__middle">
        <Container>
          <div className="header__content">
            <Logotype />

            <Search />

            <CartStatus />

            <MobileNavigation />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Header