import React, { useState } from 'react';
import './exchangepage.css'
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import NextButton from '../../../../components/Button/LongButton/LongButton'
const MySwal = withReactContent(Swal);

const ExchangePage = () => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [datetime, setDateTime] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const { productImage, productName, productDetail, profileName, profileImage,
        profilePhone, pointImage, rewardPoints, currentPoints } = location.state || {};


    const handleNextSubmit = (event) => {
        event.preventDefault();
        let tempErrors = {};

        if (!pickupLocation) {
            tempErrors.pickupLocation = 'กรุณาใส่สถานที่รับสินค้า';
        }
        if (!datetime) {
            tempErrors.datetime = 'กรุณาใส่วันและเวลา';
        }
        if (Object.keys(tempErrors).length > 0) {
            setErrors(tempErrors);
        } else {
            setErrors({});
            // เพิ่มฟังก์ชันที่ต้องการเมื่อฟอร์มถูกกรอกครบถ้วน
            const formDataExchange = {
                pickupLocation,
                datetime
            };
            console.log('Form Data Submitted: ', formDataExchange);
            // ส่งข้อมูลไปยังหน้า MedicalConfirm
            navigate('/marketplace/marketplacedetail/exchange/confirmexchange', {
                state: {
                    productImage, productName, productDetail, profileName, profileImage,
                    profilePhone, pointImage, rewardPoints, currentPoints, 
                    pickupLocation, datetime
                },
            });

        };
    };
    const handleInputChange = (field, value) => {
        // อัปเดตค่าของฟิลด์ที่ถูกแก้ไข
        switch (field) {
            case 'pickupLocation':
                setPickupLocation(value);
                break;
            case 'datetime':
                setDateTime(value);
                break;
            default:
                break;
        }
        // ลบข้อผิดพลาดถ้ามีการกรอกข้อมูลแล้ว
        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: value ? null : prevErrors[field], // ลบข้อผิดพลาดถ้ามีการกรอกข้อมูลแล้ว
        }));
    };


    return (
        <div className='exchangepage-container'>
            <div className='exchangepage-grid'>
                <div className='row-1'>
                    <div className='header title'>
                        <h2>ยืนยันการแลกสินค้า</h2>
                    </div>
                </div>
                <div className='row-2'>
                    <div className='exchangepage-card'>
                        <img src={productImage} alt={productImage} className="exchangepage-image" />
                        <div className="exchangepage-info">
                            <h3 className='exchangepage-name'>{productName}</h3>
                            <p className='productdetail'>{productDetail}</p>
                            <div className='user-group'>
                                <img
                                    src={profileImage}
                                    alt="profileImage"
                                    className='user-avatar'
                                />
                                <div className='user-info'>
                                    {profileName}<br />{profilePhone}
                                </div>
                            </div>
                            <div className="points-container">
                                <img src={pointImage} alt="Points" className="point-image" />
                                <span>{rewardPoints}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row-3'>
                    <div className='exchangepage-group'>
                        <label htmlFor="pickupLocation">สถานที่รับสินค้า<span className="required">*</span></label>
                        <input
                            type="text"
                            id="pickupLocation"
                            placeholder='สถานที่รับสินค้า'
                            value={pickupLocation}
                            onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                            className={`input-field ${errors.pickupLocation ? 'error-input' : ''}`}
                        />
                        {errors.pickupLocation && <div className="error-message">{errors.pickupLocation}</div>}
                    </div>
                </div>
                <div className='row-4'>
                    <div className='exchangepage-group'>
                        <label htmlFor="datetime">วันและเวลา<span className="required">*</span></label>
                        <input
                            type="text"
                            id="datetime"
                            placeholder='วันและเวลา'
                            value={datetime}
                            onChange={(e) => handleInputChange('datetime', e.target.value)}
                            className={`input-field ${errors.datetime ? 'error-input' : ''}`}
                        />
                        {errors.datetime && <div className="error-message">{errors.datetime}</div>}
                    </div>
                </div>
                <div className='row-5'>
                    <div onClick={handleNextSubmit} type="button" >
                        <NextButton text='ถัดไป' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExchangePage