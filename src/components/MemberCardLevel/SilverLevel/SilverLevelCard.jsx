import React, { useEffect, useState } from 'react';
import './silverlevelcard.css';
import SilverCard from '../../../assets/silvercard.png';
import Nilecon from '../../../assets/nilecon.png';

const SilverLevelCard = () => {
  const [userData, setUserData] = useState({ points: 0, name: '' });

  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="card silver">
      <div className='img-card'>
        <img src={SilverCard} alt="SilverCard" />
      </div>
      <div className="points">Points</div>
      <div className="points-value">
        250
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
      <div className="level">Silver</div>
    </div>
  );
};

export default SilverLevelCard