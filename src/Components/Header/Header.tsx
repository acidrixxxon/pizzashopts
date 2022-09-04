import React from 'react'
import { useStickyHeader } from '../../hooks/useStickyHeader'
import CartStatus from '../CartStatus/CartStatus'
import Container from '../common/Container/Container'
import Logotype from '../common/Icons/Logotype/Logotype'
import MobileNavigation from '../common/MobileNavigation/MobileNavigation'
import Search from '../Search/Search'
import './_Header.scss'

const Header: React.FC = () => {
  const headerEl = React.useRef<HTMLDivElement | null>(null)

  useStickyHeader(headerEl)

  return (
    <div id="header" ref={headerEl}>
        <Container>
          <div className="header__content">
            <Logotype />

            <Search />

            <CartStatus />

            <MobileNavigation />
          </div>
        </Container>
    </div>
  )
}

export default Header