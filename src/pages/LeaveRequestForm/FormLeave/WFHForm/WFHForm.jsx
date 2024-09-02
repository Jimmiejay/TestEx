import React, { useState } from 'react';
import './wfhform.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const WFHForm = () => {
    const [leaveType, setLeaveType] = useState("Work From Home");
    const [details, setDetails] = useState("");
    const [selectedDate, setSelectedDate] = useState('');
    const [timePeriod, setTimePeriod] = useState('เช้า');
    const navigate = useNavigate();

    const handleDateChange = (e) => {
        const Date = e.target.value;
        setSelectedDate(Date);
    };

    const handleTimePeriodChange = (period) => {
        if (!selectedDate) {
            Swal.fire({
                icon: 'warning',
                title: 'แจ้งเตือน',
                text: 'กรุณาเลือกวันที่ก่อนเลือกช่วงเวลา',
            });
            return;
        }
        setTimePeriod(period);
    };

    const handleWfhSubmit = (event) => {
        event.preventDefault();

        if (date === "") {
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


        const formDataWFH = {
            leaveType,
            details,
            timePeriod,
            date: selectedDate

        };
        // console.log('Form Data Submitted: ', formDataWFH);

        // ส่งข้อมูลไปยังหน้า WorkFromHomefirm ต้องแก้
        navigate('/leaverequestform/workfromhomeform/workfromhomeconfirm', {
            state: {
                leaveType, details, date: selectedDate
            },
        });
    };

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
    return (
        <div className='wfh-form-container'>
            <div className="wfh-header">
                <h2 className="wfh-title">แจ้งลา</h2>
            </div>
            <form className="wfh-form" onSubmit={handleWfhSubmit}>
                <div className="wfh-form-group">
                    <label htmlFor="leaveType">รายการลา<span className="wfh-required">*</span></label>
                    <select
                        id="leaveType"
                        value={leaveType}
                        onChange={handleLeaveTypeChange}
                        className="wfh-input-field"
                    >
                        <option value="ลาป่วย">ลาป่วย</option>
                        <option value="ลากิจ">ลากิจ</option>
                        <option value="Work From Home">Work From Home</option>
                    </select>
                </div>
                <div className='personal-form-group'>
                    <label htmlFor="Date">วันที่<span className="personal-required">*</span></label>
                    <input
                        type="date"
                        id="selectedDate"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="personal-input-field"
                    />
                </div>
                <div className='wfh-form-group'>
                    <label>ช่วงเวลา<span className="wfh-required">*</span></label>
                    <div className="time-period-buttons">
                        <button
                            type="button"
                            className={`time-period-button ${timePeriod === 'เช้า' ? 'selected' : ''}`}
                            onClick={() => handleTimePeriodChange('เช้า')}
                        >
                            เช้า
                        </button>
                        <button
                            type="button"
                            className={`time-period-button ${timePeriod === 'บ่าย' ? 'selected' : ''}`}
                            onClick={() => handleTimePeriodChange('บ่าย')}
                        >
                            บ่าย
                        </button>
                        <button
                            type="button"
                            className={`time-period-button ${timePeriod === 'ทั้งวัน' ? 'selected' : ''}`}
                            onClick={() => handleTimePeriodChange('ทั้งวัน')}
                        >
                            ทั้งวัน
                        </button>
                    </div>
                    <div className="time-period-details">
                        {timePeriod === 'เช้า' && <span>เวลา 9:30 - 12:30 น.</span>}
                        {timePeriod === 'บ่าย' && <span>เวลา 13:30 - 18:30 น.</span>}
                        {timePeriod === 'ทั้งวัน' && <span>เวลา 9:30 - 18:30 น.</span>}
                    </div>
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
                <button type="submit" className="wfh-submit-button">
                    ถัดไป
                </button>
            </form>
        </div>
    )
}

export default WFHForm