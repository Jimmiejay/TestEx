import React, { useState } from 'react';
import './nomalform.css';
import upload from '../../../../assets/Upload.png'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const NomalForm = () => {
    const [leaveType, setLeaveType] = useState("");
    const [details, setDetails] = useState("");
    const [file, setFile] = useState(null);
    const navigate = useNavigate();



    // ฟังก์ชัน handle สำหรับการจัดการ drag & drop
    const dropHandler = (ev) => {
        ev.preventDefault();
        if (ev.dataTransfer.files && ev.dataTransfer.files.length > 0) {
            const file = ev.dataTransfer.files[0];
            if (file) {
                // Update state with the selected file
                setFile(file);
                setFileError('');
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

    const handleLeaveTypeChange = (e) => {
        const selectedLeaveType = e.target.value;
        setLeaveType(selectedLeaveType);

        // ถ้าเลือก "ลาป่วย" ให้เปลี่ยนไปที่หน้า MedicalLeaveForm
        if (selectedLeaveType === "ลาป่วย") {
            navigate('/api/leaverequestform/medicalleaveform');
        }

        // ถ้าเลือก "ลากิจ" ให้เปลี่ยนไปที่หน้า PersonalLeaveForm
        if(selectedLeaveType === "ลากิจ") {
            navigate('/api/leaverequestform/personalleaveform');
        }

        // ถ้าเลือก "Work From Home" ให้เปลี่ยนไปที่หน้า WorkFromHomeForm
        if(selectedLeaveType === "Work From Home") {
            navigate('/api/leaverequestform/workfromhomeform');
        }
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (leaveType === "") {
    //         Swal.fire({
    //             icon: 'warning',
    //             title: 'แจ้งเตือน',
    //             text: 'กรุณาเลือกรายการ',
    //         });
    //         return;
    //     }

    //     if (details === "") {
    //         Swal.fire({
    //             icon: 'warning',
    //             title: 'แจ้งเตือน',
    //             text: 'กรุณากรอกรายละเอียด',
    //         });
    //         return;
    //     }

    //     if (!file) {
    //         Swal.fire({
    //             icon: 'warning',
    //             title: 'แจ้งเตือน',
    //             text: 'กรุณาเพิ่มไฟล์',
    //         });
    //         return;
    //     }

    //     const formDataLeave = {
    //         leaveType,
    //         details,
    //         file
    //     };
    //     console.log('Form Data Submitted: ', formDataLeave);

    //     Swal.fire({
    //         icon: 'success',
    //         title: 'ส่งฟอร์มสำเร็จ',
    //         text: 'ข้อมูลการลาของคุณถูกส่งเรียบร้อยแล้ว',
    //     });
    // };


    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                Swal.fire({
                    icon: 'error',
                    title: 'ไฟล์มีขนาดใหญ่เกินไป',
                    text: 'กรุณาเลือกไฟล์ที่มีขนาดไม่เกิน 5MB',
                });
                return;
            }
            setFile(file);
            console.log(`File selected: ${file.name}`);
        }
    };

    return (
        <div className="nomal-form-container">
            <div className="header">
                <h2 className="title">แจ้งลา</h2>
            </div>
            <form className="form">
                <div className="form-group">
                    <label htmlFor="leaveType">รายการลา<span className="required">*</span></label>
                    <select
                        id="leaveType"
                        value={leaveType}
                        onChange={handleLeaveTypeChange}
                        className="input-field"
                    >
                        <option value="" disabled>กรุณาเลือกรายการ</option>
                        <option value="ลาป่วย">ลาป่วย</option>
                        <option value="ลากิจ">ลากิจ</option>
                        <option value="Work From Home">Work From Home</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="details">รายละเอียด<span className="required">*</span></label>
                    <textarea
                        id="details"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="input-field"
                        placeholder="รายละเอียด"
                    />
                </div>
                <div className="form-group">
                    <div className='drop_zone'
                        id="drop_zone"
                        onDrop={dropHandler}
                        onDragOver={dragOverHandler}
                        onClick={() => document.getElementById('fileInput').click()}>
                        {file ? (
                            file.type.startsWith('image/') ?
                                <img src={URL.createObjectURL(file)} alt="Uploaded" className="dropped-image" /> :
                                <p>{file.name}</p>
                        ) : (
                            <div className="upload-content">
                                <img src={upload} alt="upload" className="upload-icon" />
                                <span>อัพโหลดไฟล์</span>
                            </div>
                        )}
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: 'none' }}
                            onChange={handleFileSelect}
                            accept="*/*"
                        />
                    </div>
                </div>
                <button type="submit" className="submit-button">
                    ถัดไป
                </button>
            </form>
        </div>
    )
}

export default NomalForm