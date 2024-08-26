import React, { useState } from 'react';
import './personalleaveform.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const PersonalLeaveForm = () => {

    const [leaveType, setLeaveType] = useState("ลากิจ");
    const [details, setDetails] = useState("");
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [dayCount, setDayCount] = useState('');
    const navigate = useNavigate();

    const handleStartDateChange = (e) => {
        const start = e.target.value;
        setStartDate(start);
        calculateDays(start, endDate);
    };

    const handleEndDateChange = (e) => {
        const end = e.target.value;
        setEndDate(end);
        calculateDays(startDate, end);
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

    const handlePersonalSubmit = (event) => {
        event.preventDefault();

        if (startDate === "") {
            Swal.fire({
                icon: 'warning',
                title: 'แจ้งเตือน',
                text: 'กรุณากรอกวันเดือนปี',
            });
            return;
        }

        if (endDate === "") {
            Swal.fire({
                icon: 'warning',
                title: 'แจ้งเตือน',
                text: 'กรุณากรอกวันเดือนปี',
            });
            return;
        }

        if (details === "") {
            Swal.fire({
                icon: 'warning',
                title: 'แจ้งเตือน',
                text: 'กรุณากรอกรายละเอียด',
            });
            return;
        }


        const formDataPersonalLeave = {
            leaveType,
            details,
            startDate,
            endDate,
            dayCount
        };
        // console.log('Form Data Submitted: ', formDataPersonalLeave);

        // ส่งข้อมูลไปยังหน้า MedicalConfirm
        navigate('/api/leaverequestform/personalleaveform/personalconfirm', {
            state: {
                leaveType, details, startDate,
                endDate, dayCount
            },
        });
    };

    const handleLeaveTypeChange = (e) => {
        const selectedLeaveType = e.target.value;
        setLeaveType(selectedLeaveType);

        // ถ้าเลือก "ลาป่วย" ให้เปลี่ยนไปที่หน้า MedicalLeaveForm
        if (selectedLeaveType === "ลาป่วย") {
            navigate('/api/leaverequestform/medicalleaveform');
        }

        // ถ้าเลือก "ลากิจ" ให้เปลี่ยนไปที่หน้า PersonalLeaveForm
        if (selectedLeaveType === "ลากิจ") {
            navigate('/api/leaverequestform/personalleaveform');
        }

        // ถ้าเลือก "Work From Home" ให้เปลี่ยนไปที่หน้า WorkFromHomeForm
        if (selectedLeaveType === "Work From Home") {
            navigate('/api/leaverequestform/workfromhomeform');
        }
    };

    return (
        <div className="personalleave-form-container" >
            <div className="personal-header">
                <h2 className="personal-title">แจ้งลา</h2>
            </div>
            <form className="personal-form" onSubmit={handlePersonalSubmit}>
                <div className="personal-form-group">
                    <label htmlFor="leaveType">รายการลา<span className="personal-required">*</span></label>
                    <select
                        id="leaveType"
                        value={leaveType}
                        onChange={handleLeaveTypeChange}
                        className="personal-input-field"
                    >
                        <option value="ลาป่วย">ลาป่วย</option>
                        <option value="ลากิจ">ลากิจ</option>
                        <option value="Work From Home">Work From Home</option>
                    </select>
                </div>
                <div className='personal-form-group'>
                    <label htmlFor="startDate">ตั้งแต่วันที่<span className="personal-required">*</span></label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={handleStartDateChange}
                        className="personal-input-field"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="endDate">ถึงวันที่<span className="personal-required">*</span></label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={handleEndDateChange}
                        className="personal-input-field"
                    />
                </div>
                <div className="personal-day-count">
                    {dayCount && <span>หมายเหตุ: {dayCount} วัน</span>}
                </div>
                <div className="personal-form-group">
                    <label htmlFor="details">รายละเอียด<span className="personal-required">*</span></label>
                    <textarea
                        id="details"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="personal-input-field"
                        placeholder="รายละเอียด"
                    />
                </div>
                <button type="submit" className="personal-submit-button">
                    ถัดไป
                </button>
            </form>
        </div>
    );
};

export default PersonalLeaveForm