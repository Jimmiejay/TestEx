import React, { useEffect, useState } from 'react';
import './productconfirm.css';
import Swal from 'sweetalert2';
import Button from '../../../../components/Button/LongButton/LongButton';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductConfirm = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { profileName, profilePhone, profileImage, file,
        productName, point, description, condition } = location.state || {};

    const [imagePreview, setImagePreview] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false); // สถานะสำหรับป้องกันการกดซ้ำ

    useEffect(() => {
        if (file) {
            fetch(file)
                .then(response => response.blob())
                .then(blob => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        const base64Image = reader.result; // ประกาศตัวแปร base64Image ที่นี่
                        setImagePreview(reader.result); // เก็บ Base64 URL เพื่อแสดงรูป
                        localStorage.setItem('imagePreview', base64Image); // บันทึก Base64 URL ลงใน localStorage
                        console.log(base64Image); // ตรวจสอบผลลัพธ์หลังแปลง
                    };
                    reader.readAsDataURL(blob);
                })
                .catch(err => console.error("Failed to fetch file", err));
        } else {
            console.log("ไม่พบไฟล์");
        }
    }, [file]);

    // ใช้ useEffect เพื่อดึงข้อมูลจาก localStorage เมื่อโหลดหน้า
    useEffect(() => {
        const savedImage = localStorage.getItem('imagePreview');
        if (savedImage) {
            setImagePreview(savedImage); // ตั้งค่า preview จาก localStorage ถ้ามี
        }
    }, []);

    //อันนี้แบบกำหนด isSuccess
    const handleConfirm = () => {
        const isSuccess = true;
        // const isSuccess = false; 
        // คุณสามารถเปลี่ยนเป็นเงื่อนไขจริงที่ต้องการตรวจสอบ

        if (isSuccess) {
            Swal.fire({
                title: "สำเร็จ",
                html: '<p class="productconfirm-text-class">กดใช่ คุณได้เพิ่มรายการสินค้าเรียบร้อยแล้ว</p>',
                icon: "success",
                confirmButtonText: 'เรียบร้อย',
                width: '375px',
                height: '290px',
                customClass: {
                    title:'productconfirm-title-class',
                    popup: 'productconfirm-popup-class',
                    confirmButton: 'productconfirm-confirmbutton-class'
                }
            }).then(() => {
                setisTransferDone(true);
                setIsSuccess(true); // ตั้งค่าให้ปุ่มถูก disabled หลังจากกด
            });
        } else {
            Swal.fire({
                title: "โอ้ว..ไม่นะ",
                html: '<p class="productconfirm-text-class">คุณได้กดรับสินค้าสำเร็จ</p>',
                icon: "error",
                showCancelButton: true,  // เพิ่มการแสดงปุ่ม cancel
                showConfirmButton: false,
                cancelButtonText: 'ปิด',
                width: '375px',
                height: '290px',
                customClass: {
                    title:'productconfirm-title-class',
                    popup: 'productconfirm-popup-class',
                    cancelButton: 'productconfirm-error-canclebutton-class'
                }
            });
        }
    }

    // อันนี้แบบไม่กำหนดค่า isSuccess เป็น true หรือ false แบบตรงๆ
    // const handleConfirm = async () => {
    //     try {
    //         // สมมุติว่าเรียกใช้งาน API เพื่อบันทึกข้อมูล
    //         const response = await axios.post('/api/leave-request', {
    //             leaveType,
    //             details,
    //         });

    //         // ตรวจสอบสถานะจาก response
    //         if (response.status === 200) {
    //             Swal.fire({
    //                 title: "สำเร็จ",
    //                 html: '<p class="productconfirm-text-class">กดใช่ คุณได้เพิ่มรายการสินค้าเรียบร้อยแล้ว</p>',
    //                 icon: "success",
    //                 confirmButtonText: 'เรียบร้อย',
    //                 width: '375px',
    //                 customClass: {
    //                     title:'productconfirm-title-class',
    //                     popup: 'productconfirm-popup-class',
    //                     confirmButton: 'productconfirm-confirmbutton-class'
    //                 }
    //             }).then(() => {
    //                 setisTransferDone(true);
    //             });
    //         } else {
    //             throw new Error('Request failed');
    //         }
    //     } catch (error) {
    //         Swal.fire({
    //             title: "โอ้ว..ไม่นะ",
    //             html: '<p class="productconfirm-text-class">คุณได้กดรับสินค้าสำเร็จ</p>',
    //             icon: "error",
    //             showCancelButton: true,  // เพิ่มการแสดงปุ่ม cancel
    //             showConfirmButton: false,
    //             cancelButtonText: 'ปิด',
    //             width: '375px',
    //             height: '290px',
    //             customClass: {
    //                 title:'productconfirm-title-class',
    //                 popup: 'productconfirm-popup-class',
    //                 cancelButton: 'productconfirm-error-canclebutton-class'
    //             }
    //         });
    //     }
    // }

    const handleImageClick = () => {
        navigate('/marketplace/myproducts');
    };


    return (
        <div className='productconfirm-form'>
            <div className='productconfirm-grid'>
                <div className='row-1'>
                    <div className='header'>
                        <h2 className='title'>รายการสินค้าใหม่</h2>
                    </div>
                    <div className='row-2'>
                        <div className='productconfirm-group'>
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
                        <div className='productconfirm-picgroup'>
                            {imagePreview ? (
                                <img
                                    src={imagePreview}
                                    alt="product"
                                    className='product-image'
                                />
                            ) : (
                                <p>ไม่พบรูปภาพ</p>
                            )}
                        </div>
                    </div>
                    <div className='row-4'>
                        <div className='productconfirm-group'>
                            <label htmlFor="productName">ชื่อสินค้า</label>
                            <input type="text" id="productName" value={productName} readOnly />
                        </div>
                    </div>
                    <div className='row-5'>
                        <div className='productconfirm-group'>
                            <label htmlFor="point">คะแนน</label>
                            <input type="number" id="point" value={point} readOnly />
                        </div>
                    </div>
                    <div className='row-6'>
                        <div className='productconfirm-group'>
                            <label htmlFor="description">คะแนน</label>
                            <textarea type="text" id="description" value={description} readOnly />
                        </div>
                    </div>
                    <div className='row-7'>
                        <div className='productconfirm-group'>
                            <label htmlFor="condition">คะแนน</label>
                            <input type="text" id="condition" value={condition} readOnly />
                        </div>
                    </div>
                    <div className='row-8'>
                        <div type="button" className={`next-button ${isSuccess ? 'disabled' : ''}`}  >
                            <Button 
                            onClick={handleConfirm}
                            disabled={isSuccess}
                            text={isSuccess ? 'ดำเนินการเรียบร้อยแล้ว' : 'ยืนยัน'}
                            />                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductConfirm