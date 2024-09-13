import React, { useState } from 'react';
import './personalleaveconfirm.css';
import Swal from 'sweetalert2';
import Button from '../../../../../components/Button/LongButton/LongButton';
import { useLocation } from 'react-router-dom';

const PersonalLeaveConfirm = () => {

    const location = useLocation();
    const { leaveType, details, startDate, endDate, dayCount } = location.state || {};

    const [isSuccess, setIsSuccess] = useState(false); // สถานะสำหรับป้องกันการกดซ้ำ

    //อันนี้แบบกำหนด isSuccess
    const handleConfirm = () => {
        const isSuccess = true; 
        // const isSuccess = false;
        // คุณสามารถเปลี่ยนเป็นเงื่อนไขจริงที่ต้องการตรวจสอบ
        setIsSuccess(true); // ตั้งค่าให้ปุ่มถูก disabled หลังจากกด

        if (isSuccess) {
            Swal.fire({
                title: "คุณได้แจ้งลาสำเร็จ",
                html: `<p class="personalconfirm-text-class">คุณแจ้ง ลากิจ เรียบร้อยแล้ว</p>`,
                icon: "success",
                confirmButtonText: 'เรียบร้อย',
                width: '375px',
                height: '290px',
                customClass: {
                    title: 'personalconfirm-title-class',
                    popup: 'personalconfirm-popup-class',
                    confirmButton: 'personalconfirm-confirmbutton-class'
                }
            }).then(() => {
                setisTransferDone(true);
            });
        } else {
            Swal.fire({
                title: "โอ้ว..ไม่นะ",
                html: `<p class="personalconfirm-text-class">มีอะไรบางอย่างผิดพลาด</p>`,
                icon: "error",
                showCancelButton: true,  // เพิ่มการแสดงปุ่ม cancel
                showConfirmButton: false,
                cancelButtonText: 'ปิด',
                width: '375px',
                height: '290px',
                customClass: {
                    title: 'personalconfirm-title-class',
                    popup: 'personalconfirm-popup-class',
                    cancelButton: 'personalconfirm-canclebutton-class'
                }
            });
        }
    }

    // // อันนี้แบบไม่กำหนดค่า isSuccess เป็น true หรือ false แบบตรงๆ
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
    //                 html: `<p class="personalconfirm-text-class">คุณแจ้ง ลากิจ เรียบร้อยแล้ว</p>`
    //                 icon: "success",
    //                 confirmButtonText: 'เรียบร้อย',
    //                 width: '375px',
    //                 height: '290px',
    //                 customClass: {
    //                     title: 'personalconfirm-title-class',
    //                     popup: 'personalconfirm-popup-class',
    //                     confirmButton: 'personalconfirm-confirmbutton-class'
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
    //             html: `<p class="personalconfirm-text-class">มีอะไรบางอย่างผิดพลาด</p>`,
    //             icon: "error",
    //             showCancelButton: true,  // เพิ่มการแสดงปุ่ม cancel
    //             showConfirmButton: false,
    //             cancelButtonText: 'ปิด',
    //             width: '375px',
    //             height: '290px',
    //             customClass: {
    //                 title: 'personalconfirm-title-class',
    //                 popup: 'personalconfirm-popup-class',
    //                 cancleButton: 'personalconfirm-canclebutton-class'
    //             }
    //         });
    //     }
    // }

    return (
        <div className="personalconfirm-form">
            <div className='personalconfirm-grid'>
                <div className='row-1'>
                    <div className='personalconfirm-header'>
                        <h2 className="personalconfirm-title">แจ้งลา</h2>
                    </div>
                </div>
                <div className='row-2'>
                    <div className='personalconfirm-group'>
                        <label htmlFor="leaveType">รายการลา</label>
                        <input type="text" id="leaveType" value={leaveType} readOnly />
                    </div>
                </div>
                <div className='row-3'>
                    <div className="personalconfirm-group">
                        <label htmlFor="startDate">ตั้งแต่วันที่</label>
                        <input id="startDate" value={startDate} readOnly />
                    </div>
                </div>
                <div className='row-4'>
                    <div className="personalconfirm-group">
                        <label htmlFor="startDate">ถึงวันที่</label>
                        <input id="endDate" value={endDate} readOnly />
                    </div>
                </div>
                <div className='row-5'>
                    <div className="personal-day-count">
                        {dayCount && <span>หมายเหตุ: {dayCount} วัน</span>}
                    </div>
                </div>
                <div className='row-6'>
                    <div className="personalconfirm-group">
                        <label htmlFor="details">รายละเอียด</label>
                        <textarea id="details" value={details} readOnly />
                    </div>
                </div>
                <div className='row-7'>
                    <div onClick={handleConfirm} type="button" className='next-button' >
                        <Button text='ยืนยัน' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalLeaveConfirm