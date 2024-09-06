import React, { useState } from 'react';
import './normalform.css';
import Button from '../../../../components/Button/LongButton/LongButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NormalForm = () => {
    const [leaveType, setLeaveType] = useState("");
    const [details, setDetails] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleLeaveTypeChange = (e) => {
        const selectedLeaveType = e.target.value;
        setLeaveType(selectedLeaveType);

        // ถ้าเลือก "ลาป่วย" ให้เปลี่ยนไปที่หน้า MedicalLeaveForm
        if (selectedLeaveType === "ลาป่วย") {
            navigate('/leaverequestform/medicalleaveform');
        }

        // ถ้าเลือก "ลากิจ" ให้เปลี่ยนไปที่หน้า PersonalLeaveForm
        if (selectedLeaveType === "ลากิจ") {
            navigate('/leaverequestform/personalleaveform');
        }

        // ถ้าเลือก "Work From Home" ให้เปลี่ยนไปที่หน้า WorkFromHomeForm
        if (selectedLeaveType === "Work From Home") {
            navigate('/leaverequestform/workfromhomeform');
        }
    };

    const handleInputChange = (field, value) => {
        // อัปเดตค่าของฟิลด์ที่ถูกแก้ไข
        switch (field) {
            case 'leaveType':
                setLeaveType(value);
                break;
            case 'details':
                setDetails(value);
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

    const handleNext = (event) => {
        event.preventDefault();

        let tempErrors = {};

        if (!leaveType) {
            tempErrors.leaveType = 'กรุณาเลือกรายการ';
        }
        if (!details) {
            tempErrors.details = 'กรุณาใส่รายละเอียด';
        }

        if (Object.keys(tempErrors).length > 0) {
            setErrors(tempErrors);
        } else {
            setErrors({});
            // เพิ่มฟังก์ชันที่ต้องการเมื่อฟอร์มถูกกรอกครบถ้วน
        }
    };

    return (
        <div className="normal-form-container">
            <div className='normal-grid'>
                <div className='row-1'>
                    <div className='header'>
                        <h2 className="title">แจ้งลา</h2>
                    </div>
                </div>
                <div className='row-2'>
                    <form className='form-group'>
                        <label htmlFor="leaveType">รายการลา<span className="required">*</span></label>
                        <select
                            id="leaveType"
                            value={leaveType}
                            onChange={handleLeaveTypeChange}
                            className={`input-field ${errors.leaveType ? 'error-input' : ''}`}
                        >
                            <option value="" disabled>เลือกรายการ</option>
                            <option value="ลาป่วย">ลาป่วย</option>
                            <option value="ลากิจ">ลากิจ</option>
                            <option value="Work From Home">Work From Home</option>
                        </select>
                        {errors.leaveType && <div className="error-message">{errors.leaveType}</div>}
                    </form>
                </div>
                <div className='row-3'>
                    <form className='form-group'>
                        <label htmlFor="details">รายละเอียด<span className="required">*</span></label>
                        <textarea
                            id="details"
                            value={details}
                            onChange={(e) => handleInputChange('details', e.target.value)}
                            className={`input-details ${errors.details ? 'error-input' : ''}`}
                            placeholder="รายละเอียด"
                        />
                        {errors.details && <div className="error-message">{errors.details}</div>}
                    </form>
                </div>
                <div className='row-4'>
                    <div onClick={handleNext} type="button" className='next-button' >
                        <Button text='ถัดไป' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NormalForm