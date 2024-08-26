import React from 'react';
import './membercard.css'
// import SilverLevelCard from '../../components/MemberCardLevel/SilverLevel/SilverLevelCard';
// import GoldLevelCard from '../../components/MemberCardLevel/GoldLevel/GoldLevelCard';
// import PlatinumLevelCard from '../../components/MemberCardLevel/PlatinumLevel/PlatinumLevelCard';
import MembershipCard from '../../components/MemberCardLevel/AllLevel/MembershipCard';

const MemberCard = () => {
    return (
        <div className='membercard-container'>
            <div className='membercard-content'>
                {/* <SilverLevelCard /> */}
                {/* <GoldLevelCard /> */}
                {/* <PlatinumLevelCard /> */}
                <MembershipCard />
            </div>
            <div className='card-buttons'>
                <div className='button-wrapper'><button>คิวอาร์โค้ด</button></div>
                <div className='button-wrapper'><button>สแกนคิวอาร์โค้ด</button></div>
                <div className='button-wrapper'><button>จัดอันดับ</button></div>
            </div>
        </div>
    )
}

export default MemberCard