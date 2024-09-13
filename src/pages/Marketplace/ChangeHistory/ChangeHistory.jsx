import React from 'react';
import './changehistory.css';
import { useNavigate } from 'react-router-dom';
import MarketHistoryCard from '../../../components/MarketHistoryCard/MarketHistoryCard';


const ChangeHistory = () => {
  const navigate = useNavigate();
  return (
    <div className='changehistory-container'>
      <div className='changehistory-grid'>
        <div className='row-1'>
          <div className='header title'>
            <h3>ประวัติการแลกของ</h3>
          </div>
        </div>
        <div className='row-2'>
          {/* <h3>ประวัติการแลกของ</h3> */}
          <MarketHistoryCard />
        </div>
      </div>
    </div>
  )
}

export default ChangeHistory