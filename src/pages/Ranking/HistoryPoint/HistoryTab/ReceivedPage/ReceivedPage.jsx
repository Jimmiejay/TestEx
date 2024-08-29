import React from 'react'
import './receivedpage.css'
import ReceivedCard from '../../../../../components/receivedcard/ReceivedCard';
import HrReceivedcard from '../../../../../components/receivedcard/HrReceivedcard';



const ReceivedPage = () => {

  return (
    <div className="receivedpage-container">
      <div className='scrollable-content'>
        <div className='content'>
          <div className='ReceivedCard'>
            <ReceivedCard showMonth={true} />
          </div>
          <div className='TransferCard'>
            <HrReceivedcard showMonth={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceivedPage