import React from 'react'
import './_ProductImage.scss'

const ProductImage:React.FC<{src: string }> = ({ src }) => {
  return (
    <div id="productImage">
        <img src={src} alt="product-image" className='productImage__img'/>
    </div>
  )
}

export default ProductImage