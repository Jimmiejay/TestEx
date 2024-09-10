import React, { useEffect, useState } from 'react'
import './formproduct.css'
import Paom from '../../../assets/พี่ออม.png';
import Gallery from '../../../assets/image-gallery.png'
import { useNavigate } from 'react-router-dom';
import NextButton from '../../../components/Button/LongButton/LongButton'
// import FormMarketplace from '../../../components/FormMarketplace/FormMarketplace';

const FormProduct = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [profileName, setProfileName] = useState('');
    const [profilePhone, setProfilePhone] = useState('');
    const [productName, setProductName] = useState('');
    const [point, setPoint] = useState('');
    const [description, setDescription] = useState('');
    const [condition, setCondition] = useState('');
    const [image, setImage] = useState(null);
    const [imageError, setImageError] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        // กำหนดค่าต่างๆ ที่คุณต้องการภายใน useEffect
        setProfileImage(Paom);
        setProfileName('aom');
        setProfilePhone('098-xxx-xxxx')
    }, []);


    // ฟังก์ชัน handle สำหรับการจัดการ drag & drop
    const dropHandler = (ev) => {
        ev.preventDefault();
        if (ev.dataTransfer.files && ev.dataTransfer.files.length > 0) {
            const file = ev.dataTransfer.files[0];
            if (file) {
                // Update state with the selected file
                setImage(URL.createObjectURL(file));
                setImageError('');
                console.log(`File dropped: ${file.name}`);
            }
        } else {
            console.log('No files found');
        }
    };

    const dragOverHandler = (ev) => {
        ev.preventDefault();
        console.log('Dragging over drop zone');
    };

    const handleNext = (event) => {
        event.preventDefault();
        let tempErrors = {};

        if (!image) {
            setImageError('กรุณาเพิ่มรูป');
        }
        if (!productName) {
            tempErrors.productName = 'กรุณาใส่ชื่อสินค้า';
        }
        if (!point) {
            tempErrors.point = 'กรุณาใส่คะแนน';
        }
        if (!description) {
            tempErrors.description = 'กรุณาใส่คำอธิบาย';
        }
        if (!condition) {
            tempErrors.condition = 'กรุณาใส่สภาพสินค้า';
        }
        if (Object.keys(tempErrors).length > 0) {
            setErrors(tempErrors);
        } else {
            setErrors({});
            // เพิ่มฟังก์ชันที่ต้องการเมื่อฟอร์มถูกกรอกครบถ้วน
            const formData = {
                productName,
                point,
                description,
                condition,
                file: image,
                profileName,
                profilePhone,
                profileImage
            };
            console.log('Form Data Submitted: ', formData);
            // ส่งข้อมูลไปยังหน้า MedicalConfirm
            navigate('/marketplace/formproduct/productconfirm', {
                state: { profileName, profilePhone, profileImage, file: image, productName, point, description, condition },
            });

        };



    };
    const handleInputChange = (field, value) => {
        // อัปเดตค่าของฟิลด์ที่ถูกแก้ไข
        switch (field) {
            case 'productName':
                setProductName(value);
                break;
            case 'point':
                setPoint(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'condition':
                setCondition(value);
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

    const handleImageClick = () => {
        navigate('/marketplace/myproducts');
    };

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            // setImage(URL.createObjectURL(file));
            setImageError('');
            console.log(`File selected: ${file.name}`);
        }
    };

    return (
        <div className='formproduct-container'>
            <div className='product-grid'>
                <div className='row-1'>
                    <div className='header'>
                        <h2 className="title">รายการสินค้าใหม่</h2>
                    </div>
                </div>
                <div className='row-2'>
                    <div className='formproduct-group'>
                        <div className='user-group'>
                            <img
                                src={profileImage}
                                alt="profileImage"
                                className='user-avatar'
                                onClick={handleImageClick}
                                style={{ cursor: 'pointer' }}
                            />
                            <div className='user-info'>
                                {profileName}<br />{profilePhone}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row-3'>
                    <div className='formproduct-group'>
                        <div className={`drop_zone ${imageError ? 'error-input' : ''}`}
                            id="drop_zone"
                            onDrop={dropHandler}
                            onDragOver={dragOverHandler}
                            onClick={() => document.getElementById('fileInput').click()}>
                            {image ? <img src={image} alt="Dropped" className={`dropped-image ${image ? 'error-image' : ''}`} /> : (
                                <>
                                    <img src={Gallery} alt="Gallery" />
                                    <p>เพิ่มรูป</p>
                                </>
                            )}
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                onChange={handleFileSelect}
                                accept="image/*"
                            />
                        </div>
                        {imageError && <p className="error-message">{imageError}</p>}
                    </div>
                </div>
                <div className='row-4'>
                    <div className='formproduct-group'>
                        <label htmlFor="productName">ชื่อสินค้า<span className="required">*</span></label>
                        <input
                            type="text"
                            id="productName"
                            placeholder='ชื่อสินค้า'
                            value={productName}
                            onChange={(e) => handleInputChange('productName', e.target.value)}
                            className={`input-field ${errors.productName ? 'error-input' : ''}`}
                        />
                        {errors.productName && <div className="error-message">{errors.productName}</div>}
                    </div>
                </div>
                <div className='row-5'>
                    <div className='formproduct-group'>
                        <label htmlFor="point">คะแนน<span className="required">*</span></label>
                        <input
                            type="number"
                            id="point"
                            placeholder='คะแนน'
                            value={point}
                            onChange={(e) => handleInputChange('point', e.target.value)}
                            className={`input-field ${errors.point ? 'error-input' : ''}`}
                        />
                        {errors.point && <div className="error-message">{errors.point}</div>}
                    </div>
                </div>
                <div className='row-6'>
                    <div className='formproduct-group'>
                        <label htmlFor="description">คำอธิบาย<span className="required">*</span></label>
                        <textarea
                            type='text'
                            id="description"
                            placeholder='คำอธิบาย'
                            value={description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            className={`input-detail ${errors.description ? 'error-input' : ''} `}
                        />
                        {errors.description && <div className="error-message">{errors.description}</div>}
                    </div>
                </div>
                <div className='row-7'>
                    <div className='formproduct-group'>
                        <label htmlFor="condition">สภาพสินค้า<span className="required">*</span></label>
                        <input
                            type="text"
                            id="condition"
                            placeholder='สภาพสินค้า'
                            value={condition}
                            onChange={(e) => handleInputChange('condition', e.target.value)}
                            className={`input-field ${errors.condition ? 'error-input' : ''}`}
                        />
                        {errors.condition && <div className="error-message">{errors.condition}</div>}
                    </div>
                </div>
                <div className='row-8'>
                    <div onClick={handleNext} type="button" className='next-button' >
                        <NextButton text='ถัดไป' />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FormProduct