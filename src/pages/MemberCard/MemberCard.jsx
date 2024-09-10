import React from 'react';
import './membercard.css'
import MembershipCard from '../../components/MemberCardLevel/AllLevel/MembershipCard';
import { useNavigate } from 'react-router-dom';

const MemberCard = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/ranking');
    };
    return (
        <div className='membercard-container'>
            <div className='membercard-content'>
                <MembershipCard />
            </div>
            <div className='card-buttons'>
                <div className='button-wrapper'><button>คิวอาร์โค้ด</button></div>
                <div className='button-wrapper'><button>สแกนคิวอาร์โค้ด</button></div>
                <div className='button-wrapper'><button onClick={handleClick}>จัดอันดับ</button></div>
            </div>
        </div>
    )
}

export default MemberCard