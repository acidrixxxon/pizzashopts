import React from 'react'
import './_PizzaList.scss'
import { pizzaCategory } from '../../../../mockdata'
import { SearchResultInterface } from '../../../../types'
import PizzaComponent from '../../ProductComponent/PizzaComponent/PizzaComponent'
import { Context } from '../../../../Context'
import ItemsList from '../../ItemsList/ItemsList'

type PropsType = {
  items: SearchResultInterface[],
}

const PizzaList:React.FC<PropsType> = ({ items }) => {
  const { state: { sort }} = React.useContext(Context)


  return (
    <>
      <div className='pizza__list'>
        {sort === 0 ? pizzaCategory.map((category) => {
          const pizzaArray = items.filter(pizza => pizza.category === category.id)

          return pizzaArray.length > 0 &&
            <div className='pizza__category'>
              <h4 className='pizza__categoryTitle'>Піца: {category.title}</h4>

              <ItemsList>
                {pizzaArray.map((item) => <PizzaComponent key={item.id} pizza={item} />)}
              </ItemsList>
            </div> 
        }): (
          <ItemsList>
            {items.map((item) => <PizzaComponent key={item.id} pizza={item} />)}
          </ItemsList>
        )}
      </div>
    </>
  )
}

export default PizzaList