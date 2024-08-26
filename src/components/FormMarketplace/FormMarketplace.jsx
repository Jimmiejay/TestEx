import React, { useState } from 'react';
import './formmarketplace.css';
import Paom from '../../assets/พี่ออม.png';
import Gallery from '../../assets/image-gallery.png'
import { useNavigate } from 'react-router-dom';

const FormMarketplace = () => {
    const [productName, setProductName] = useState('');
    const [point, setPoint] = useState('');
    const [description, setDescription] = useState('');
    const [condition, setCondition] = useState('');
    const [image, setImage] = useState(null);
    const [imageError, setImageError] = useState('');
    const navigate = useNavigate();

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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!image) {
            setImageError('กรุณาเพิ่มรูปภาพ');
            return;
        }

        const formData = {
            productName,
            point,
            description,
            condition,
            deliveryMethod,
            image
        };
        console.log('Form Data Submitted: ', formData);
    };

    const handleImageClick = () => {
        navigate('/api/marketplace/myproducts');
    };

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setImageError('');
            console.log(`File selected: ${file.name}`);
        }
    };



    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <div className="form-header">
                <img
                    src={Paom}
                    alt="P aom"
                    className="user-avatar"
                    onClick={handleImageClick}
                    style={{ cursor: 'pointer' }} />
                <p className="user-info">aom<br />098-xxx-xxxx</p>
            </div>
            <div className="form-group">
                <div className='drop_zone'
                    id="drop_zone"
                    onDrop={dropHandler}
                    onDragOver={dragOverHandler}
                    onClick={() => document.getElementById('fileInput').click()}>
                    {image ? <img src={image} alt="Dropped" className="dropped-image" /> : (
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
            <div className="form-group">
                <label htmlFor="productName">ชื่อสินค้า<span className="required">*</span></label>
                <input
                    type="text"
                    id="productName"
                    placeholder='ชื่อสินค้า'
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="point">คะแนน<span className="required">*</span></label>
                <input
                    type="number"
                    id="point"
                    placeholder='คะแนน'
                    value={point}
                    onChange={(e) => setPoint(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">คำอธิบาย<span className="required">*</span></label>
                <textarea
                    id="description"
                    placeholder='คำอธิบาย'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="condition">สภาพสินค้า<span className="required">*</span></label>
                <input
                    type="text"
                    placeholder='สภาพสินค้า'
                    id="condition"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="submit-button">ถัดไป</button>
        </form>
    );
};

export default FormMarketplace