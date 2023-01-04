import React, { Dispatch, SetStateAction } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { TailSpin } from 'react-loader-spinner';

import ProductService from '../../../../Services/ProductService';
import { IIngridientsCategory } from '../../../../types/ProductTypes';

import IngridientsCategory from './IngridientsCategories/IngridientsCategory';

import './_SetIngridients.scss';

interface IComponentProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const SetIngridients: React.FC<IComponentProps> = ({ visible, setVisible }) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [ingridients, setIngridients] = React.useState<IIngridientsCategory[] | null>(null);

  React.useEffect(() => {
    const fetchIngridients = async () => {
      setLoading(true);

      const data = await ProductService.fetchIngridientList();

      if (data.success === true && data.ingridients) {
        setIngridients(data.ingridients);
        setLoading(false);
      }
    };

    fetchIngridients();
  }, []);

  const renderIngridients = ingridients !== null && !loading;

  return (
    <div className={visible ? 'addModal modal__isVisible' : 'addModal'} onClick={() => setVisible(false)}>
      <div className='addModal__content' onClick={(e) => e.stopPropagation()}>
        <span className='addModal__closeIcon' onClick={() => setVisible(false)}>
          <AiOutlineClose />
        </span>

        <h4 className='addModal__title'>Оберіть інгредієнти</h4>

        {loading ? (
          <TailSpin wrapperClass='addModal__spinner' />
        ) : (
          <div className='addModal__ingridientsList'>
            {renderIngridients && ingridients.map((item) => <IngridientsCategory key={item._id} category={item} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default SetIngridients;
