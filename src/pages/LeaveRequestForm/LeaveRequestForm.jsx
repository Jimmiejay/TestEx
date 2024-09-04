import React from 'react';
import './leaverequestform.css';
import NormalForm from './FormLeave/NormalForm/NormalForm';



const LeaveRequestForm = () => {
    return (
        <div className='leaverequestform-container'>
            <div className='leaverequestform-content'>
                < NormalForm />
            </div>
        </div>
    )
}

export default LeaveRequestForm