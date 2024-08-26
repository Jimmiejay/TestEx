import React from 'react'
import './history.css'
// import BG from '../../assets/bg.png'
import BG from '../../assets/bg2.png'
import HistoryCard from './HistoryCard/HistoryCard'
import HistoryPoint from './HistoryPoint/HistoryPoint';



const History = () => {
    return (
        <div className='history-container'>
            <div className='history-content'>
                <div className='top-row'>
                    <img className='bg-img' src={BG} alt="bg" />
                    <div className='history-txt txthistory '>History</div>
                    <HistoryCard />
                </div>
                <div className='low-row'>
                    <HistoryPoint />
                </div>
            </div>
        </div>
    );
};

export default History