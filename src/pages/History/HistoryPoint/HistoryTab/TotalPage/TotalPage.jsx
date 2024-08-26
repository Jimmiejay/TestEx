import React from 'react'
import './totalpage.css'
import ReceivedCard from '../../../../../components/receivedcard/ReceivedCard';
import TransferCard from '../../../../../components/transfercard/TransferCard';
import HrReceivedcard from '../../../../../components/receivedcard/HrReceivedcard';



const TotalPage = () => {

    return (
        <div className='total-container'>
            <div className='scrollable-content'>
                <div className='content'>
                    <div className='ReceivedCard'>
                        <ReceivedCard showMonth={true} />
                    </div>
                    <div className='TransferCard'>
                        <TransferCard showMonth={true} showSpecificMonth={false} />
                    </div>
                    <div className='TransferCard'>
                        <HrReceivedcard showMonth={false} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalPage