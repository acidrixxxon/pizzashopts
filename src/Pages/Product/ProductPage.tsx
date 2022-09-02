import React from 'react'
import { useParams } from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react'
import Container from '../../Components/common/Container/Container'
import ProductImage from '../../Components/common/ProductDetailsComponents/ProductImage/ProductImage'
import ProductInfo from '../../Components/common/ProductDetailsComponents/ProductInfo/ProductInfo'
import { Context } from '../../Context'
import ProductService from '../../Services/ProductService'
import './_ProductPage.scss'


const ProductPage:React.FC = () => {
    const [ loading,setLoading ] = React.useState<boolean>(true)
    const { dispatch,state: { productDetails } } = React.useContext(Context)

    const { id } = useParams()

    console.log(productDetails)

    React.useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const data = await ProductService.getProductById(id)
    
            dispatch({type: 'SET_PRODUCT_DETAILS',payload: data})
            setLoading(false)
        }
    
        getData()
    },[])

    if (loading) return <SpinnerCircular className='loader'/>

    return (
        <div id="product">
            <Container>
                <ProductImage src={productDetails.imageUrl} />
                <ProductInfo  data={productDetails} />
            </Container>
        </div>
    )
}

export default ProductPage