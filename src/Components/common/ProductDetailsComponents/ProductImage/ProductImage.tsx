import React from 'react'
import './_ProductImage.scss'

const ProductImage:React.FC<{src: string }> = ({ src }) => {
  return (
    <div id="product-image">
        <img src={src} alt="product-image" />
    </div>
  )
}

export default ProductImage