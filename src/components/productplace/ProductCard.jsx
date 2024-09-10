import React from 'react'
import './productcard.css'
import Coin from '../../assets/pcoin.png'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ image, title, points, byname }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/marketplace/marketplacedetail'); //ต้องแก้
    };

    // ฟังก์ชันแปลงวันที่เวลาให้อยู่ในรูปแบบ วัน/เดือน/ปี, เวลา
    const formatDateTime = (date) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(date).toLocaleDateString('th-TH', options);
    };

    // สมมติว่าคุณต้องการใช้วันที่ปัจจุบัน
    const currentDateTime = formatDateTime(new Date());

    return (
        <div className='product-card' onClick={handleClick}>
            <img src={image} alt={title} className="product-image" />
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <div className='price-container'>
                    <div className='price-circle'>
                        <img src={Coin} alt="coin" />
                    </div>
                    <p className="product-price">{points}</p>
                </div>
                <div className='product-info-row'>
                    <span className="product-byname">{byname}</span>
                    <span className="product-datetime">{currentDateTime}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard