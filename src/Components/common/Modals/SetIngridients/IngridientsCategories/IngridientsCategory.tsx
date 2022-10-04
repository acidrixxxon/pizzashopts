import React from 'react'
import { IIngridientsFull } from '../../../../../types'
import { HiArrowSmRight } from 'react-icons/hi'
import './_IngridientsCategory.scss'
import { AnimatePresence,motion } from 'framer-motion'
import IngridientsCategoryItem from './IngridientsCategoryItem/IngridientsCategoryItem'
import useOutsideClick from '../../../../../hooks/useOutsideClick'

interface IComponentProps {
  category: {
    id: number,
    title: string
  },
  items: IIngridientsFull[]
}

const IngridientsCategory:React.FC<IComponentProps> = ({ category,items }) => {
  const [ listVisibility,setListVisibility ] = React.useState<boolean>(false)

  const categoryRef = React.useRef<HTMLDivElement>(null)

  // useOutsideClick(categoryRef,() => setListVisibility(false))

  React.useEffect(() => {
    const handleClickOutside = (e: any) => {
        const path = e.path || (e.composedPath && e.composedPath());
        
        if (!path.includes(categoryRef.current)) {
            setListVisibility(false)
        }
    }

    document.addEventListener('click',handleClickOutside)

    return () => document.removeEventListener('click',handleClickOutside)
},[])


  const toggleVisibility = () => setListVisibility(!listVisibility)

  return (
    <div id="ingridientsCategory" ref={categoryRef}>
      <div className="ingridientsCategory__header" onClick={toggleVisibility}>
        <span className="ingridientsCategory__title">{category.title}</span>

        <span className={listVisibility ? "ingridientsCategory__arrow arrow__halfRotated" : "ingridientsCategory__arrow"}>
          <HiArrowSmRight />
        </span>
      </div>

      <AnimatePresence>
          {listVisibility && (
            <motion.ul 
              initial={{height: '0px',opacity: 0}}
              animate={{height: 'auto',opacity: 1}}
              exit={{height: '0px',opacity: 0}}
              transition={{ duration: .2 }}
              className='ingridientsCategory__list'>
              {items.map((ingridient) => <IngridientsCategoryItem item={ingridient}/>)}
            </motion.ul>
          )}
        </AnimatePresence>
    </div>
  )
}

export default IngridientsCategory