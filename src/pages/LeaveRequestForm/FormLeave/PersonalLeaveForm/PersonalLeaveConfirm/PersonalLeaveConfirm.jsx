import React from 'react';
import './personalleaveconfirm.css';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

const PersonalLeaveConfirm = () => {

    const location = useLocation();
    const { leaveType, details, startDate, endDate, dayCount } = location.state || {};

    const handleConfirm = () => {
        Swal.fire({
            title: "ทำรายการลาลำเสร็จ",
            text: "คุณทำรายการลาลำเสร็จ",
            icon: "success",
            confirmButtonText: 'เรียบร้อย',
            confirmButtonColor: "#DE2D1E",
            width: 375
        }).then(() => {
            setisTransferDone(true);
        });
    }

    return (
        <div className="personalconfirm-form">
            <div className='personalconfirm-header'>
                <h2 className='personalconfirm-title'>แจ้งลา</h2>
            </div>
            <div className="personalconfirm-group">
                <label htmlFor="leaveType">รายการลา</label>
                <input type="text" id="leaveType" value={leaveType} readOnly />
            </div>
            <div className="personalconfirm-group">
                <label htmlFor="startDate">ตั้งแต่วันที่</label>
                <input id="startDate" value={startDate} readOnly />
            </div>
            <div className="personalconfirm-group">
                <label htmlFor="startDate">ถึงวันที่</label>
                <input id="endDate" value={endDate} readOnly />
            </div>
            <div className="personal-day-count">
                {dayCount && <span>หมายเหตุ: {dayCount} วัน</span>}
            </div>
            <div className="personalconfirm-group">
                <label htmlFor="details">รายละเอียด</label>
                <textarea id="details" value={details} readOnly />
            </div>
            <button onClick={handleConfirm} className='personalconfirmbtn'>ยืนยัน</button>
        </div>
    );
};

export default PersonalLeaveConfirm