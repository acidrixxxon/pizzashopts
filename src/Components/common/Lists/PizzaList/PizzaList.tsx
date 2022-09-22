import React from 'react'
import './_PizzaList.scss'
import { pizzaCategory } from '../../../../mockdata'
import { IPizza } from '../../../../types'
import PizzaComponent from '../../ProductComponent/PizzaComponent/PizzaComponent'
import ItemsList from '../../ItemsList/ItemsList'
import ProductService from '../../../../Services/ProductService'
import Skeleton from '../../Skeleton/Skeleton'
import { Context1 } from '../../../../Context/Context'


const PizzaList:React.FC = () => {
  const [ items,setItems ] = React.useState<IPizza[]>([])
  const [ loading,setLoading ] = React.useState<boolean>(true)

  const { state: { sort: { category,sort } } } = React.useContext(Context1)

  React.useEffect(() => {
    const getData = async () => {
        setLoading(true)
        const data = await ProductService.fetchProducts(category,sort)

        setItems(data)
        setLoading(false)
    }

    getData()
},[sort,category])



  return (
    <>
      {loading ? <Skeleton /> : 
        <div className='pizza__list list'>
          {sort === 0 ? pizzaCategory.map((category) => {
            const pizzaArray = items.filter(pizza => pizza.category === category.id)

            return pizzaArray.length > 0 &&
              <div className='pizza__category' key={category.id}>
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
      </div>}
    </>
  )
}


export default PizzaList