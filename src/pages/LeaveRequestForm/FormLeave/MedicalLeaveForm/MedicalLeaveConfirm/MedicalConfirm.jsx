import React, { useState } from 'react';
import './medicalcomfirm.css';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
// import MedicalLeaveForm from '../MedicalLeaveForm';


const MedicalConfirm = () => {

    const location = useLocation();
    const { leaveType, details } = location.state || {};

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
        <div className="medicalconfirm-form">
            <div className='medicalconfirm-header'>
                <h2 className='medicalconfirm-title'>แจ้งลา</h2>
            </div>
            <div className="medicalconfirm-group">
                <label htmlFor="leaveType">รายการลา</label>
                <input type="text" id="leaveType" value={leaveType} readOnly />
            </div>
            <div className="medicalconfirm-group">
                <label htmlFor="details">รายละเอียด</label>
                <textarea id="details" value={details} readOnly />
            </div>
            {/* <div className="medicalconfirm-group">
                <label htmlFor="details">รายละเอียด</label>
                <textarea id="details" value={details} readOnly />
            </div> */}
            <button onClick={handleConfirm} className='medicalconfirmbtn'>ยืนยัน</button>
        </div>
    );
};

export default MedicalConfirm