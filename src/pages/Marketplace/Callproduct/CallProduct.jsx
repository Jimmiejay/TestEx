import React from 'react'
import './callproduct.css'
import ProductDetail from '../../../components/productplace/ProductDetail/ProductDetail'
import { useNavigate } from 'react-router-dom';


const CallProduct = ({ owner }) => {
    
    return (
        <div className='callproduct-container'>
            <ProductDetail owner={owner}/> {/* ส่งข้อมูล owner เพื่อใช้ในการกรอง */}
        </div>
    )
}

export default CallProduct