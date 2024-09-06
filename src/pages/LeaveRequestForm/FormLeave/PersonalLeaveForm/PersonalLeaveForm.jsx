import React, { useState } from 'react';
import './personalleaveform.css'
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button/LongButton/LongButton';


const PersonalLeaveForm = () => {

    const [leaveType, setLeaveType] = useState("ลากิจ");
    const [details, setDetails] = useState("");
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [dayCount, setDayCount] = useState('');
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

    const handleStartDateChange = (e) => {
        const start = e.target.value;
        setStartDate(start);
        calculateDays(start, endDate);
        setErrors((prevErrors) => ({
            ...prevErrors,
            startDate: start ? null : prevErrors.startDate,
        }));
    };

    const handleEndDateChange = (e) => {
        const end = e.target.value;
        setEndDate(end);
        calculateDays(startDate, end);
        setErrors((prevErrors) => ({
            ...prevErrors,
            endDate: end ? null : prevErrors.endDate,
        }));
    };

    const calculateDays = (start, end) => {
        if (start && end) {
            const startDateObj = new Date(start);
            const endDateObj = new Date(end);

            let currentDate = startDateObj;
            let totalDays = 0;

            while (currentDate <= endDateObj) {
                const dayOfWeek = currentDate.getDay();

                // วันจันทร์ถึงศุกร์ (วันอาทิตย์ = 0, วันเสาร์ = 6)
                if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                    totalDays++;
                }

                // เลื่อนไปวันถัดไป
                currentDate.setDate(currentDate.getDate() + 1);
            }
            setDayCount(totalDays);
        } else {
            setDayCount('');
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

    const handlePersonalNext = (event) => {
        event.preventDefault();
        let tempErrors = {};

        if (!leaveType) {
            tempErrors.leaveType = 'กรุณาเลือกรายการ';
        }
        if (!startDate) {
            tempErrors.startDate = 'กรุณาใส่วันที่';
        }
        if (!endDate) {
            tempErrors.endDate = 'กรุณาใส่วันที่';
        }
        if (!details) {
            tempErrors.details = 'กรุณาใส่รายละเอียด';
        }
        if (Object.keys(tempErrors).length > 0) {
            setErrors(tempErrors);
        } else {
            setErrors({});
            // เพิ่มฟังก์ชันที่ต้องการเมื่อฟอร์มถูกกรอกครบถ้วน
            const formDataPersonalLeave = {
                leaveType,
                details,
                startDate,
                endDate,
                dayCount
            };
            // console.log('Form Data Submitted: ', formDataPersonalLeave);
            // ส่งข้อมูลไปยังหน้า PersonalConfirm
            navigate('/leaverequestform/personalleaveform/personalconfirm', {
                state: {
                    leaveType, details, startDate,
                    endDate, dayCount
                },
            });
        };
    };


    return (
        <div className="personal-form-container" >
            <div className='personal-grid'>
                <div className='row-1'>
                    <div className='personal-header'>
                        <h2 className="personal-title">แจ้งลา</h2>
                    </div>
                </div>
                <div className='row-2'>
                    <form className='personal-form-group'>
                        <label htmlFor="leaveType">รายการลา<span className="personal-required">*</span></label>
                        <select
                            id="leaveType"
                            value={leaveType}
                            onChange={handleLeaveTypeChange}
                            className={`personal-input-field ${errors.leaveType ? 'error-input' : ''}`}
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
                    <form className='personal-form-group'>
                        <label htmlFor="startDate">ตั้งแต่วันที่<span className="personal-required">*</span></label>
                        <input
                            type="date"
                            id="startDate"
                            value={startDate}
                            onChange={handleStartDateChange}
                            className={`personal-input-field ${errors.startDate ? 'error-input' : ''}`}
                        />
                        {errors.startDate && <div className="error-message">{errors.startDate}</div>}
                    </form>
                </div>
                <div className='row-4'>
                    <form className='personal-form-group'>
                        <label htmlFor="endDate">ถึงวันที่<span className="personal-required">*</span></label>
                        <input
                            type="date"
                            id="endDate"
                            value={endDate}
                            onChange={handleEndDateChange}
                            className={`personal-input-field ${errors.endDate ? 'error-input' : ''}`}
                        />
                        {errors.endDate && <div className="error-message">{errors.endDate}</div>}
                    </form>
                </div>
                <div className='row-5'>
                    <div className="personal-day-count">
                        {dayCount && <span>หมายเหตุ: {dayCount} วัน</span>}
                    </div>
                </div>
                <div className='row-6'>
                    <form className='personal-form-group'>
                        <label htmlFor="details">รายละเอียด<span className="personal-required">*</span></label>
                        <textarea
                            id="details"
                            value={details}
                            onChange={(e) => handleInputChange('details', e.target.value)}
                            className={`personal-input-details ${errors.details ? 'error-input' : ''}`}
                            placeholder="รายละเอียด"
                        />
                        {errors.details && <div className="error-message">{errors.details}</div>}
                    </form>
                </div>
                <div className='row-7'>
                    <div onClick={handlePersonalNext} type="button" className='next-button' >
                        <Button text='ถัดไป' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalLeaveForm