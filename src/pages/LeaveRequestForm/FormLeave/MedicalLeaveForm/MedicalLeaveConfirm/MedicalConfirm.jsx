import React, { useState } from 'react';
import './medicalcomfirm.css';
import Swal from 'sweetalert2';
import Button from '../../../../../components/Button/LongButton/LongButton';
import { useLocation } from 'react-router-dom';


const MedicalConfirm = () => {

    const location = useLocation();
    const { leaveType, details } = location.state || {};

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
                html: `<p class="medicalconfirm-text-class">คุณแจ้ง ลาป่วย เรียบร้อยแล้ว</p>`,
                icon: "success",
                confirmButtonText: 'เรียบร้อย',
                width: '375px',
                height: '290px',
                customClass: {
                    title: 'medicalconfirm-title-class',
                    popup: 'medicalconfirm-popup-class',
                    confirmButton: 'medicalconfirm-confirmbutton-class'
                }
            }).then(() => {
                setisTransferDone(true);
            });
        } else {
            Swal.fire({
                title: "โอ้ว..ไม่นะ",
                html: `<p class="medicalconfirm-text-class">มีอะไรบางอย่างผิดพลาด</p>`,
                icon: "error",
                showCancelButton: true,  // เพิ่มการแสดงปุ่ม cancel
                showConfirmButton: false,
                cancelButtonText: 'ปิด',
                width: '375px',
                height: '290px',
                customClass: {
                    title: 'medicalconfirm-title-class',
                    popup: 'medicalconfirm-popup-class',
                    cancelButton: 'medicalconfirm-canclebutton-class'
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
    //                 html: `<p class="medicalconfirm-text-class">คุณแจ้ง ลาป่วย เรียบร้อยแล้ว</p>`,
    //                 icon: "success",
    //                 confirmButtonText: 'เรียบร้อย',
    //                 width: '375px',
    //                 height: '290px',
    //                 customClass: {
    //                     title: 'medicalconfirm-title-class',
    //                     popup: 'medicalconfirm-popup-class',
    //                     confirmButton: 'medicalconfirm-confirmbutton-class'
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
    //             html: `<p class="medicalconfirm-text-class">มีอะไรบางอย่างผิดพลาด</p>`,
    //             icon: "error",
    //             showCancelButton: true,  // เพิ่มการแสดงปุ่ม cancel
    //             showConfirmButton: false,
    //             cancelButtonText: 'ปิด',
    //             cancelButtonColor: "#CFCFCF",
    //             width: '375px',
    //             height: '290px',
    //             customClass: {
    //                 title: 'medicalconfirm-title-class',
    //                 popup: 'medicalconfirm-popup-class',
    //                 cancelButton: 'medicalconfirm-canclebutton-class'
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
                    <div type="button" className={`next-button ${isSuccess ? 'disabled' : ''}`} >
                        <Button
                            onClick={handleConfirm}
                            disabled={isSuccess}
                            text={isSuccess ? 'ดำเนินการเรียบร้อยแล้ว' : 'ยืนยัน'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalConfirm