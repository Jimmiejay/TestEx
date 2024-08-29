import React from 'react'
import './transferpage.css'
import TransferCard from '../../../../../components/transfercard/TransferCard'

const TransferPage = () => {
    return (
        <div className='transferpage-container'>
            <div className='scrollable-content'>
                <div className='content'>
                    <TransferCard showMonth={true} showSpecificMonth={true} />
                </div>
            </div>
        </div>
    );
};

export default TransferPage