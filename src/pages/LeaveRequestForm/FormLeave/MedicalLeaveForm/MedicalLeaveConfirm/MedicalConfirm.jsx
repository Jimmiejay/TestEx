import React, { useState } from 'react';
import './medicalcomfirm.css';
import Swal from 'sweetalert2';
import Button from '../../../../../components/Button/LongButton/LongButton';
import { useLocation } from 'react-router-dom';


const MedicalConfirm = () => {

    const location = useLocation();
    const { leaveType, details } = location.state || {};


    //อันนี้แบบกำหนด isSuccess
    const handleConfirm = () => {
        const isSuccess = true; 
        // const isSuccess = false; 
        // คุณสามารถเปลี่ยนเป็นเงื่อนไขจริงที่ต้องการตรวจสอบ
        
        if (isSuccess){
            Swal.fire({
                title: "คุณได้แจ้งลาสำเร็จ",
                text: "คุณแจ้ง ลาป่วย เรียบร้อยแล้ว",
                icon: "success",
                confirmButtonText: 'เรียบร้อย',
                confirmButtonColor: "#29AE4C",
                width: '375px',
                height: '290px',
                customClass: {
                    popup: 'medicalconfirm-popup-class',
                    confirmButton: 'medicalconfirm-button-class'
                }
            }).then(() => {
                setisTransferDone(true);
            });
        } else{
            Swal.fire({
                title: "โอ้ว..ไม่นะ",
                text: "มีอะไรบางอย่างผิดพลาด",
                icon: "error",
                showCancelButton: true,  // เพิ่มการแสดงปุ่ม cancel
                showConfirmButton: false,
                cancelButtonText: 'ปิด',
                cancelButtonColor: "#CFCFCF",
                width: '375px',
                height: '290px',
                customClass: {
                    popup: 'medicalconfirm-popup-class',
                    confirmButton: 'medicalconfirm-button-class'
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
    //                  title: "คุณได้แจ้งลาสำเร็จ",
    //                 text: "คุณแจ้ง ลาป่วย เรียบร้อยแล้ว",
    //                 icon: "success",
    //                 confirmButtonText: 'เรียบร้อย',
    //                 confirmButtonColor: "#29AE4C",
    //                 width: '375px',
    //                 height: '290px',
    //                 customClass: {
    //                     popup: 'medicalconfirm-popup-class',
    //                     confirmButton: 'medicalconfirm-button-class'
    //                 }
    //             }).then(() => {
    //                 setisTransferDone(true);
    //             });
    //         } else {
    //             throw new Error('Request failed');
    //         }
    //     } catch (error) {
    //         Swal.fire({
    //             //             title: "โอ้ว..ไม่นะ",
    //             text: "มีอะไรบางอย่างผิดพลาด",
    //             icon: "error",
    //             showCancelButton: true,  // เพิ่มการแสดงปุ่ม cancel
    //             showConfirmButton: false,
    //             cancelButtonText: 'ปิด',
    //             cancelButtonColor: "#CFCFCF",
    //             width: '375px',
    //             height: '290px',
    //             customClass: {
    //                 popup: 'medicalconfirm-popup-class',
    //                 confirmButton: 'medicalconfirm-button-class'
    //             }
    //         });
    //     }
    // }

    return (
        <div className='medicalconfirm-form'>
            <div className='medicalconfirm-grid'>
                <div className='row-1'>
                    <div className='header'>
                        <h2 className="title">แจ้งลา</h2>
                    </div>
                </div>
                <div className='row-2'>
                    <div className='medicalconfirm-group'>
                        <label htmlFor="leaveType">รายการลา</label>
                        <input type="text" id="leaveType" value={leaveType} readOnly />
                    </div>
                </div>
                <div className='row-3'>
                    <div className="medicalconfirm-group">
                        <label htmlFor="details">รายละเอียด</label>
                        <textarea id="details" value={details} readOnly />
                    </div>
                </div>
                <div className='row-4'>
                    <div onClick={handleConfirm} type="button" className='next-button' >
                        <Button text='ยืนยัน' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalConfirm