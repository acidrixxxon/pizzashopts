import React from 'react'
import { useParams } from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react'
import Container from '../../Components/common/Container/Container'
import HorisontalPizzaCarousel from '../../Components/HorisontalPizzaCarousel/HorisontalPizzaCarousel'
import ProductImage from '../../Components/common/ProductDetailsComponents/ProductImage/ProductImage'
import ProductInfo from '../../Components/common/ProductDetailsComponents/ProductInfo/ProductInfo'
import { Context1 } from '../../Context/Context'
import ProductService from '../../Services/ProductService'
import './_ProductPage.scss'


const ProductPage:React.FC = () => {
    const [ loading,setLoading ] = React.useState<boolean>(true)
    const {state: { productDetails },actions: { setProductDetails } } = React.useContext(Context1)

    const { id } = useParams()

    React.useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const data = await ProductService.getProductById(id)
    
            setProductDetails(data)
            setLoading(false)
        }
    
        getData()
    },[id])

    if (loading) return <SpinnerCircular className='loader'/>

    return (
        <div id="product">
            <Container>
                <ProductImage src={productDetails.imageUrl} />
                <ProductInfo />
            </Container>
            
            <HorisontalPizzaCarousel />
        </div>
    )
}

export default ProductPage