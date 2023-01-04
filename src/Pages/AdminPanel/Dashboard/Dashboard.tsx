import React from 'react'

import Content from '../../../Components/AdminComponents/Content/Content'
import SideNav from '../../../Components/AdminComponents/SideNav/SideNav'
import Container from '../../../Components/common/Container/Container'

import './_Dashboard.scss'

const Dashboard = () => {
  const [ activeTab,setActiveTab ] = React.useState<number>(0)

  return (
    <div id="dashboard">
      <Container>
        <div className="dashboard__wrapper">
          <SideNav tab={activeTab} setTab={setActiveTab} />

          <Content tab={activeTab} />
        </div>
      </Container>
    </div>
  )
}

export default Dashboard