import React, { useEffect, useState } from 'react';
import './wfhform.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button/LongButton/LongButton';
import Swal from 'sweetalert2';

const WFHForm = () => {
    const [leaveType, setLeaveType] = useState("Work From Home");
    const [details, setDetails] = useState("");
    const [selectedDate, setSelectedDate] = useState('');
    const [timePeriod, setTimePeriod] = useState('เช้า');
    const [timeDetails, setTimeDetails] = useState('');
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

    useEffect(() => {
        // อัปเดต timeDetails ตาม timePeriod ที่เลือก
        switch (timePeriod) {
            case 'เช้า':
                setTimeDetails('เวลา 9:30 - 12:30 น.');
                break;
            case 'บ่าย':
                setTimeDetails('เวลา 13:30 - 18:30 น.');
                break;
            case 'ทั้งวัน':
                setTimeDetails('เวลา 9:30 - 18:30 น.');
                break;
            default:
                setTimeDetails('');
                break;
        }
    }, [timePeriod]); // ใช้ dependency เป็น timePeriod


    const handleWfhSubmit = (event) => {
        event.preventDefault();

        // if (date === "") {
        //     Swal.fire({
        //         icon: 'warning',
        //         title: 'แจ้งเตือน',
        //         text: 'กรุณากรอกวันเดือนปี',
        //     });
        //     return;
        // }

        // if (details === "") {
        //     Swal.fire({
        //         icon: 'warning',
        //         title: 'แจ้งเตือน',
        //         text: 'กรุณากรอกรายละเอียด',
        //     });
        //     return;
        // }

        let tempErrors = {};

        if (!leaveType) {
            tempErrors.leaveType = 'กรุณาเลือกรายการ';
        }
        if (!selectedDate) {
            tempErrors.startDate = 'กรุณาใส่วันที่';
        }
        if (!timePeriod) {
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
            const formDataWFH = {
                leaveType,
                details,
                timePeriod,
                date: selectedDate,
                timeDetails


            };
            // console.log('Form Data Submitted: ', formDataWFH);

            // ส่งข้อมูลไปยังหน้า WorkFromHomefirm ต้องแก้
            navigate('/leaverequestform/workfromhomeform/workfromhomeconfirm', {
                state: {
                    leaveType, details, date: selectedDate, timePeriod, timeDetails
                },
            });
        };
    };

    return (
        <div className='wfh-form-container'>
            <div className='wfh-grid'>
                <div className='row-1'>
                    <div className='wfh-header'>
                        <h2 className="wfh-title">แจ้งลา</h2>
                    </div>
                </div>
                <div className='row-2'>
                    <div className='wfh-form-group'>
                        <label htmlFor="leaveType">รายการลา<span className="wfh-required">*</span></label>
                        <select
                            id="leaveType"
                            value={leaveType}
                            onChange={handleLeaveTypeChange}
                            className={`wfh-input-field ${errors.leaveType ? 'error-input' : ''}`}
                        >
                            <option value="ลาป่วย">ลาป่วย</option>
                            <option value="ลากิจ">ลากิจ</option>
                            <option value="Work From Home">Work From Home</option>
                        </select>
                        {errors.leaveType && <div className="error-message">{errors.leaveType}</div>}
                    </div>
                </div>
                <div className='row-3'>
                    <div className='wfh-form-group'>
                        <label htmlFor="Date">วันที่<span className="wfh-required">*</span></label>
                        <input
                            type="date"
                            id="selectedDate"
                            value={selectedDate}
                            onChange={handleDateChange}
                            className={`wfh-input-field ${errors.selectedDate ? 'error-input' : ''}`}
                        />
                        {errors.selectedDate && <div className="error-message">{errors.selectedDate}</div>}
                    </div>
                </div>
                <div className='row-4'>
                    <div className='wfh-form-group'>
                        <label htmlFor="timePeriod">ช่วงเวลา<span className="wfh-required">*</span></label>
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
                            <span>{timeDetails}</span>
                        </div>
                    </div>
                </div>
                <div className='row-5'>
                    <div className='wfh-form-group'>
                        <label htmlFor="details">รายละเอียด<span className="wfh-required">*</span></label>
                        <textarea
                            id="details"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            className="personal-input-field"
                            placeholder="รายละเอียด"
                        />

                    </div>
                </div>
                <div className='row-6'>
                    <div onClick={handleWfhSubmit} type="button" className='next-button' >
                        <Button text='ถัดไป' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WFHForm