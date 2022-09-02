import React, { Dispatch, SetStateAction } from 'react'
import './_SetIngridients.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { ingridientsCategories, ingridientsList } from '../../../../mockdata'
import { Context } from '../../../../Context'
import IngridientsCategory from './IngridientsCategories/IngridientsCategory'


interface IComponentProps {
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>

}

const SetIngridients:React.FC<IComponentProps> = ({ visible,setVisible }) => {

  const { state: { productDetails }} = React.useContext(Context)
    
  return (
    <div className={visible? "addModal modal__isVisible" : "addModal"} onClick={() => setVisible(false)}>

      <div className="addModal__content" onClick={(e) => e.stopPropagation()}>

        <span className="addModal__closeIcon" onClick={() => setVisible(false)}>
          <AiOutlineClose />
        </span>

        <h4 className="addModal__title">
          Оберіть інгредієнти
        </h4>

        <div className="addModal__ingridientsList">
          {ingridientsCategories.map((item) => {
            const items = ingridientsList.filter(ingridient => ingridient.category == item.id)

            return <IngridientsCategory key={item.id} category={item} items={items} />
          })}
        </div>
      </div>
    </div>
  )
}

export default SetIngridients