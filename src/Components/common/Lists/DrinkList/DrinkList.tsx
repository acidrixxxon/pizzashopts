import React from 'react'
import { Context } from '../../../../Context'
import { drinkCategory } from '../../../../mockdata'
import ProductService from '../../../../Services/ProductService'
import { IDrink } from '../../../../types'
import ItemsList from '../../ItemsList/ItemsList'
import DrinkComponent from '../../ProductComponent/DrinkComponent/DrinkComponent'
import Skeleton from '../../Skeleton/Skeleton'

const DrinkList = () => {
    const [ loading,setLoading ] = React.useState<boolean>(true)
    const [ items,setItems ] = React.useState<IDrink[]>([])

    const { state: { category,sort }} = React.useContext(Context)

    React.useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const data = await ProductService.fetchProducts(category,sort)
    
            setItems(data)
            setLoading(false)
        }
    
        getData()
    },[sort,category])

    console.log(items)

    return (
        <>
            {loading ? <Skeleton /> :         
                <div id="drink__list" className='list'>
                    {sort === 0 ? drinkCategory.map((category) => {
                        const products = items.filter((item) => item.category === category.id)

                        return products.length > 0 &&
                            <div className='side__category category'>
                                <h4 className="side__categoryTitle category__title">{category.title}</h4>

                                <ItemsList>
                                    {products.map((product) => <DrinkComponent key={product.id} item={product} />)}
                                </ItemsList>
                            </div>
                    }) : 
                    <ItemsList>
                        {items.map((product) => <DrinkComponent key={product.id} item={product} />)}
                    </ItemsList> }
                </div>
            }
        </>
    )
}

export default DrinkList