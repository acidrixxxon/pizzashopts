import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Container from '../../Components/common/Container/Container'
import UserCabinetContent from '../../Components/UserCabinetContent/UserCabinetContent'
import UserCabinetNavigation from '../../Components/UserCabinetNavigation/UserCabinetNavigation'
import './_UserCabinetPage.scss'

const UserCabinetPage = () => {
  const [ activeTab,setActiveTab ] = React.useState<string>('profile')
  
  const location = useLocation()
  
  React.useEffect(() => {
    const tabName = location.search.split('=')[1]
    
    if(tabName) {
      setActiveTab(tabName)
    }
  },[])



  return (
    <div id="UserCabinetPage">
      <Container>
        <div className="UserCabinet__wrapper">
          <UserCabinetNavigation state={activeTab} changeTab={setActiveTab} />
          <UserCabinetContent state={activeTab} />
        </div>
      </Container>
    </div>
  )
}

export default UserCabinetPage