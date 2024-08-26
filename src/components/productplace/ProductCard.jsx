import React from 'react'
import './productcard.css'
import Coin from '../../assets/pcoin.png'

const ProductCard = ({ image, title, price, description }) => {
    return (
        <div className='product-card'>
            <img src={image} alt={title} className="product-image" />
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <div className='price-container'>
                    <div className='price-circle'>
                        <img src={Coin} alt="coin" />
                    </div>
                    <p className="product-price">{price}</p>
                </div>
                <p className="product-description">{description}</p>
            </div>
        </div>
    )
}

export default ProductCard