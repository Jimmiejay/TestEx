import React from 'react';
import './wfhconfirm.css'
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

const WFHConfirm = () => {
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
    };

    return (
        <div className="wfhconfirm-form">
            <div className='wfhconfirm-header'>
                <h2 className='wfhconfirm-title'>แจ้งลา</h2>
            </div>
            <div className="wfhconfirm-group">
                <label htmlFor="leaveType">รายการลา</label>
                <input type="text" id="leaveType" value={leaveType} readOnly />
            </div>
            <div className="wfhconfirm-group">
                <label htmlFor="startDate">วันที่</label>
                <input id="startDate" value={startDate} readOnly />
            </div>
            <div className="wfhconfirm-group">
                <label>ช่วงเวลา</label>
                <input id="endDate" value={endDate} readOnly />
            </div>
            <div className="wfhconfirm-group">
                <label htmlFor="details">รายละเอียด</label>
                <textarea id="details" value={details} readOnly />
            </div>
            <button onClick={handleConfirm} className='wfhconfirmbtn'>ยืนยัน</button>
        </div>
    );
};

export default WFHConfirm