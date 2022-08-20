import React from 'react'
import { Context } from '../../../../Context'
import ProductService from '../../../../Services/ProductService'
import { SearchResultInterface } from '../../../../types'
import PizzaList from '../PizzaList/PizzaList'

const ProductList: React.FC = () => {
    const [ items,setItems ] = React.useState<SearchResultInterface[] | []>([])
    const { state: { category,sort }} = React.useContext(Context)
    
    React.useEffect(() => {
        const getData = async () => {
            const data = await ProductService.fetchProducts(category,sort)
            setItems(data)
        }

        getData()
    },[sort,category])

        return (
            <>
                {category === 0 && <PizzaList items={items}/>}
            </>
        )
}

export default ProductList