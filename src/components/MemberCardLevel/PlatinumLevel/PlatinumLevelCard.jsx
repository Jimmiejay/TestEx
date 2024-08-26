import React, { useEffect, useState } from 'react';
import './platinumlevelcard.css';
import PlatinumCard from '../../../assets/platinumcard.png';
import Nilecon from '../../../assets/nilecon.png';


const PlatinumLevelCard = () => {
    const [userData, setUserData] = useState({ points: 0, name: '' });

    useEffect(() => {
        fetch('/api/user')
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    return (
        <div className="card platinum">
            <div className='img-card'>
                <img src={PlatinumCard} alt="PlatinumCard" />
            </div>
            <div className="points">Points</div>
            <div className="points-value">
                659
                {/* {userData.points} */}
            </div>
            {/* <div className="points-value">{userData.points}</div> */}
            <div className="brand-img">
                <img src={Nilecon} alt="Nilecon" />
            </div>
            <div className="membership">
                aom
                {/* {userData.name} */}
            </div>
            {/* <div className="membership">{userData.name}</div> */}
            <div className="level">Platinum</div>
        </div>
    );
};

export default PlatinumLevelCard