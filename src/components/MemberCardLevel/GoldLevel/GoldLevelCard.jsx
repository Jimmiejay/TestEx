import React, { useEffect, useState } from 'react';
import './goldlevelcard.css';
import GoldCard from '../../../assets/goldcard.png';
import Nilecon from '../../../assets/nilecon.png';

const GoldLevelCard = () => {
    const [userData, setUserData] = useState({ points: 0, name: '' });

    useEffect(() => {
        fetch('/api/user')
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    return (
        <div className="card gold">
            <div className='img-card'>
                <img src={GoldCard} alt="GoldCard" />
            </div>
            <div className="points">Points</div>
            <div className="points-value">
                350
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
            <div className="level">Gold</div>
        </div>
    );
};

export default GoldLevelCard