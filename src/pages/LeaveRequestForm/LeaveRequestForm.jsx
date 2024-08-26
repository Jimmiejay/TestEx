import React from 'react';
import './leaverequestform.css';
import NomalForm from './FormLeave/NomalForm/NomalForm';



const LeaveRequestForm = () => {
    return (
        <div className='leaverequestform-container'>
            <div className='leaverequestform-content'>
                < NomalForm />
            </div>
        </div>
    )
}

export default LeaveRequestForm