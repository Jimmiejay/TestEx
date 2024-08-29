import React, { useState } from 'react'
import './historytab.css'
import TotalPage from './TotalPage/TotalPage'
import ReceivedPage from './ReceivedPage/ReceivedPage';
import TransferPage from './TransferPage/TransferPage';

const HistoryTab = () => {
    const [tabactive, setTabActive] = useState('tab-1');

    const handleClick = (event) => {
        setTabActive(event.target.id);
    };

    return (
        <div className='historyTab-container'>
            <div className='historyTab-txt'><h3>ประวัติคะแนน</h3></div>
            <div className='historyTab'>
                <button className={`historyTab-button ${tabactive === 'tab-1' ? 'active' : ''}`}
                    id='tab-1'
                    onClick={handleClick}>
                    รวมทั้งหมด
                </button>
                <button className={`historyTab-button ${tabactive === 'tab-2' ? 'active' : ''}`}
                    id='tab-2'
                    onClick={handleClick}>
                    คะแนนที่ได้รับ
                </button>
                <button className={`historyTab-button ${tabactive === 'tab-3' ? 'active' : ''}`}
                    id='tab-3'
                    onClick={handleClick}>
                    คะแนนที่ถูกใช้
                </button>
            </div>
            <div className='historyTab-content'>
                <div className={`historyTab-page ${tabactive === 'tab-1' ? 'active' : ''}`}>
                    <TotalPage />
                </div>
                <div className={`historyTab-page ${tabactive === 'tab-2' ? 'active' : ''}`}>
                    <ReceivedPage />
                </div>
                <div className={`historyTab-page ${tabactive === 'tab-3' ? 'active' : ''}`}>
                    <TransferPage/>
                </div>
            </div>
        </div>
    );
};

export default HistoryTab