import React from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';

import { IIngridientsCategory } from '../../../../../types/ProductTypes';

import IngridientsCategoryItem from './IngridientsCategoryItem/IngridientsCategoryItem';

import './_IngridientsCategory.scss';

interface IComponentProps {
  category: IIngridientsCategory;
}

const IngridientsCategory: React.FC<IComponentProps> = ({ category }) => {
  const [listVisibility, setListVisibility] = React.useState<boolean>(false);

  const categoryRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: any) => {
      const path = e.path || (e.composedPath && e.composedPath());

      if (!path.includes(categoryRef.current)) {
        setListVisibility(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleVisibility = () => setListVisibility(!listVisibility);

  return (
    <div id='ingridientsCategory' ref={categoryRef}>
      <div className='ingridientsCategory__header' onClick={toggleVisibility}>
        <span className='ingridientsCategory__title'>{category.title}</span>

        <span className={listVisibility ? 'ingridientsCategory__arrow arrow__halfRotated' : 'ingridientsCategory__arrow'}>
          <HiArrowSmRight />
        </span>
      </div>

      <AnimatePresence>
        {listVisibility && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='ingridientsCategory__list'>
            {category.ingridients.map((ingridient) => (
              <IngridientsCategoryItem item={ingridient} key={ingridient._id} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IngridientsCategory;
