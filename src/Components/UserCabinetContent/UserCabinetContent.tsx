import { AnimatePresence } from 'framer-motion'
import React from 'react'
import UserCabinetOrders from './UserCabinetOrders/UserCabinetOrders'
import UserCabinetProfile from './UserCabinetProfile/UserCabinetProfile'

interface ComponentProps {
  state: string
}

const UserCabinetContent:React.FC<ComponentProps> = ({ state }) => {
  return (
    <div id="UserCabinet__content">
      <AnimatePresence>
        {state === 'profile' && <UserCabinetProfile /> }
        {state === 'orders' && <UserCabinetOrders />}
      </AnimatePresence>
    </div>
  )
}

export default UserCabinetContent