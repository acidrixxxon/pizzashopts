import { motion } from 'framer-motion'
import React from 'react'

const MainContent = () => {
  return (
    <motion.div       
      initial={{ opacity: 0,transform: 'scale(.8)' }}
      animate={{ opacity: 1,transform: 'scale(1)' }}
      exit={{ opacity: 0,transform: 'scale(.8)' }} >
        MainContent
    </motion.div>
  )
}

export default MainContent