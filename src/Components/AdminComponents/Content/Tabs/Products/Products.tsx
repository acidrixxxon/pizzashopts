import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './_Products.scss'
import PizzaManagement from './PizzaManagement/PizzaManagement'
import SidesManagement from './SidesManagement/SidesManagement'

const Products = () => {
  const [ activeManagement,setActiveManagement ] = React.useState<number>(0)

  return (
    <motion.div    
      id="adminPanelProducts"   
      initial={{ opacity: 0,transform: 'scale(.8)' }}
      animate={{ opacity: 1,transform: 'scale(1)' }}
      exit={{ opacity: 0,transform: 'scale(.8)' }} >
        <ul className="products__categorylist">
          <li className={activeManagement === 0 ? "products__categorylist-item active" : "products__categorylist-item"} onClick={() => setActiveManagement(0)}>
            Піца
          </li>

          <li className={activeManagement === 1 ? "products__categorylist-item active" : "products__categorylist-item"} onClick={() => setActiveManagement(1)}>
            Сайди
          </li>

          <li className={activeManagement === 2 ? "products__categorylist-item active" : "products__categorylist-item"} onClick={() => setActiveManagement(3)}>
            Напої
          </li>
        </ul>

        <div className="products__content">
          <AnimatePresence>
            {activeManagement === 0 && <PizzaManagement />}
            {activeManagement === 1 && <SidesManagement />}
          </AnimatePresence>
        </div>
    </motion.div>
  )
}

export default Products