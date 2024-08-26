import React from 'react'
import './productdetail.css'
import ProductCard from '../ProductCard'
import Image1 from '../../../assets/124.png' 
import Image2 from '../../../assets/126.png' 

const ProductDetail = () => {
    const names = ['numfon', 'bambam', 'Aom']
  return (
    <div className="product-grid">
            <ProductCard 
                image={Image1}
                title="CRYBABY × Powerpuff Girls Series-Vinyl Face Plush Blind Box"
                price="430"
                description={`By ${names[2]}`}
            />
            {/* <ProductCard 
                image={Image2} 
                title="CRYBABY Sunset Concert Series-Phone Case"
                price="฿550"
                description={`By ${names[0]}`}
            /> */}
        </div>
  )
}

export default ProductDetail