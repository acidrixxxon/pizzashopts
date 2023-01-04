import React from 'react'
import { AnimatePresence } from 'framer-motion'

import MainContent from './Tabs/Main/MainContent'
import Products from './Tabs/Products/Products'

interface ComponentProps {
  tab: number
}

const Content:React.FC<ComponentProps> = ({ tab }) => {
  return (
    <AnimatePresence>
      <div id="dashboardContent">
        {tab === 0 && <MainContent />}
        {tab === 1 && <Products />}
      </div>
    </AnimatePresence>
  )
}

export default Content