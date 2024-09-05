import React from 'react';
import './wfhconfirm.css'
import Swal from 'sweetalert2';
import Button from '../../../../../components/Button/LongButton/LongButton';
import { useLocation } from 'react-router-dom';

const WFHConfirm = () => {
    const location = useLocation();
    const { leaveType, details, date: selectedDate, timePeriod, timeDetails } = location.state || {};

    //อันนี้แบบกำหนด isSuccess
    const handleConfirm = () => {
        const isSuccess = true;
        // const isSuccess = false; 
        // คุณสามารถเปลี่ยนเป็นเงื่อนไขจริงที่ต้องการตรวจสอบ

        if (isSuccess) {
            Swal.fire({
                title: "คุณได้แจ้งลาสำเร็จ",
                text: "คุณแจ้ง ลาป่วย เรียบร้อยแล้ว",
                icon: "success",
                cancelButtonText: 'เรียบร้อย',
                cancelButtonColor: "#29AE4C",
                width: '375px',
                height: '290px',
                customClass: {
                    popup: 'medicalconfirm-popup-class',
                    confirmButton: 'medicalconfirm-button-class'
                }
            }).then(() => {
                setisTransferDone(true);
            });
        } else {
            Swal.fire({
                title: "โอ้ว..ไม่นะ",
                text: "มีอะไรบางอย่างผิดพลาด",
                icon: "error",
                confirmButtonText: 'ปิด',
                confirmButtonColor: "#CFCFCF",
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
    //                 title: "คุณได้แจ้งลาสำเร็จ",
    //                 text: "คุณแจ้ง ลาป่วย เรียบร้อยแล้ว",
    //                 icon: "success",
    //                 confirmButtonText: 'เรียบร้อย',
    //                 confirmButtonColor: "#29AE4C",
    //                 width: '375px',
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
    //             title: "การแจ้งลาไม่สำเร็จ",
    //             text: "เกิดข้อผิดพลาดบางอย่าง กรุณาลองใหม่อีกครั้ง",
    //             icon: "error",
    //             confirmButtonText: 'ลองใหม่',
    //             confirmButtonColor: "#DE2D1E",
    //             width: '375px',
    //             customClass: {
    //                 popup: 'error-popup-class',
    //                 confirmButton: 'error-button-class'
    //             }
    //         });
    //     }
    // }

    return (
        <div className="wfhconfirm-form">
            <div className='wfhconfirm-grid'>
                <div className='row-1'>
                    <div className='wfhconfirm-header'>
                        <h2 className="wfhconfirm-title">แจ้งลา</h2>
                    </div>
                </div>
                <div className='row-2'>
                    <div className='wfhconfirm-group'>
                        <label htmlFor="leaveType">รายการลา</label>
                        <input type="text" id="leaveType" value={leaveType} readOnly />
                    </div>
                </div>
                <div className='row-3'>
                    <div className='wfhconfirm-group'>
                        <label htmlFor="startDate">วันที่</label>
                        <input id={"selectedDate"} value={selectedDate} readOnly />
                    </div>
                </div>
                <div className='row-4'>
                    <div className='wfhconfirm-group'>
                        <label htmlFor="timePeriod">ช่วงเวลา</label>
                        <input id="timePeriod" value={`${timePeriod} ${timeDetails}`} readOnly />
                    </div>
                </div>
                <div className='row-5'>
                    <div className='wfhconfirm-group'>
                        <label htmlFor="details">รายละเอียด</label>
                        <textarea id="details" value={details} readOnly />
                    </div>
                </div>
                <div className='row-6'>
                    <div onClick={handleConfirm} type="button" className='next-button' >
                        <Button text='ยืนยัน' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WFHConfirm