import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../Components/common/Container/Container'
import ProductImage from '../../Components/common/ProductDetailsComponents/ProductImage/ProductImage'
import ProductInfo from '../../Components/common/ProductDetailsComponents/ProductInfo/ProductInfo'
import ProductService from '../../Services/ProductService'
import { IDrink, IIngridients, IPizza, ISide } from '../../types'
import './_ProductPage.scss'


interface emptyDetails {
    imageUrl: string,
    class: number,
    category: number,
    id: number,
    title: '',
    ingridients: IIngridients[] | undefined
}

const ProductPage = () => {
    const [ details,setDetails ] = React.useState<emptyDetails>({
        imageUrl: '',
        class: 0,
        category: 0,
        id: 0,
        title: '',
        ingridients: []
    })
    const [ loading,setLoading ] = React.useState<boolean>(true)

    const { id } = useParams()

    console.log(details)

    React.useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const data = await ProductService.getProductById(id)
    
            setDetails(data)
            setLoading(false)
        }
    
        getData()
    },[])

    if (loading) return <span>Loading...</span>

    return (
        <div id="product">
            <Container>
                <ProductImage src={details.imageUrl} />
                <ProductInfo  data={details} />
            </Container>
        </div>
    )
}

export default ProductPage