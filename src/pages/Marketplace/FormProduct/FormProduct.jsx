import React from 'react'
import './formproduct.css'
// import Paom from '../../../assets/พี่ออม.png'
import { useNavigate } from 'react-router-dom';
// import UploadImage from '../../../components/uploadimage/UploadImage';
import FormMarketplace from '../../../components/FormMarketplace/FormMarketplace';

const FormProduct = () => {
    
    // const navigate = useNavigate();

    

    // const handleImageClick = () => {
    //     navigate('/api/marketplace/myproducts');
    // };

    return (
        <div className='formproduct-container'>
            <div className='formproduct-content'>
                <div className='formproduct-txt'>
                    <h1>รายการสินค้าใหม่</h1>
                </div>
                {/* <div className='formproduct-profile'>
                    <img
                        src={Paom}
                        alt="P'Aom"
                        onClick={handleImageClick}
                        style={{ cursor: 'pointer' }}
                    /> */}
                    {/* <div className='formproduct-txt'> */}
                        {/* ต้องแก้เพื่อที่จะรับค่าเข้ามาจาก database  */}
                        {/* <h2>aom</h2>
                        <h3>098-xxx-xxxx</h3>
                    </div>
                    <div className='formproduct-uploadimg'>
                        < UploadImage />
                    </div> */}
                {/* </div> */}
                <FormMarketplace />
            </div>
        </div>
    );
};

export default FormProduct