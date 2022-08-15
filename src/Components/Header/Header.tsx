import CartStatus from '../CartStatus/CartStatus'
import Container from '../common/Container/Container'
import Logotype from '../common/Icons/Logotype/Logotype'
import MobileNavigation from '../common/MobileNavigation/MobileNavigation'
import Search from '../Search/Search'
import './_Header.scss'

const Header: React.FC = () => {
  return (
    <div id="header">
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