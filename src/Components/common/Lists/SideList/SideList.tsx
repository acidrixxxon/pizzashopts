import React from 'react'
import { Context1 } from '../../../../Context/Context'
import { sidesCategory } from '../../../../mockdata'
import ProductService from '../../../../Services/ProductService'
import { ISide } from '../../../../types'
import ItemsList from '../../ItemsList/ItemsList'
import SideComponent from '../../ProductComponent/SideComponent/SideComponent'
import Skeleton from '../../Skeleton/Skeleton'

const SideList:React.FC = () => {
    const [ loading,setLoading ] = React.useState<boolean>(true)
    const [ items,setItems ] = React.useState<ISide[]>([])

    const { state: { sort: { category,sort }}} = React.useContext(Context1)

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
                <div id="side__list"  className='list'>
                    {sort === 0 ? sidesCategory.map((category) => {
                        const products = items.filter((item) => item.category === category.id)

                        return products.length > 0 &&
                            <div className='side__category category'>
                                <h4 className="side__categoryTitle category__title">{category.title}</h4>

                                <ItemsList>
                                    {products.map((product) => <SideComponent key={product.id} item={product} />)}
                                </ItemsList>
                            </div>
                    }) : 
                    <ItemsList>
                        {items.map((product) => <SideComponent key={product.id} item={product} />)}
                    </ItemsList> }
                </div>
            }
        </>
    )
}

export default SideList