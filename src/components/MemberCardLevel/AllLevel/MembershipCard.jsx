import React, { useEffect, useState } from 'react';
import './membershipcard.css';
import SilverCardImage from '../../../assets/silvercard.png';
import GoldCardImage from '../../../assets/goldcard.png';
import PlatinumCardImage from '../../../assets/platinumcard.png';
import Nilecon from '../../../assets/nilecon.png';

const MembershipCard = () => {

  const [userData, setUserData] = useState({ points: 500, name: 'aom' });
   // const [userData, setUserData] = useState({ points: 0, name: '' });

  // Uncomment this block when ready to connect to the database
  /*
  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);
  */

  let cardImage;
  let level;

  if (userData.points <= 250) {
    cardImage = SilverCardImage;
    level = 'Silver';
  } else if (userData.points <= 500) {
    cardImage = GoldCardImage;
    level = 'Gold';
  } else if (userData.points <= 750) {
    cardImage = PlatinumCardImage;
    level = 'Platinum';
  } else {
    // กรณีนี้จะไม่มีเงื่อนไขเพิ่มเติม แค่รองรับกรณีที่คะแนนเกิน 750 ขึ้นไป
    cardImage = PlatinumCardImage;
    level = 'Platinum';
  }

  return (
    <div className={`card ${level.toLowerCase()}`}>
      <div className="img-card">
        <img src={cardImage} alt={`${level} Card`} />
      </div>
      <div className="points">Points</div>
      <div className="points-value">
        {userData.points}
      </div>
      <div className="brand-img">
        <img src={Nilecon} alt="Nilecon" />
      </div>
      <div className="membership">
        {userData.name}

        {/* {userData.name || 'User'} */}
      </div>
      <div className="level">{level}</div>
    </div>
  );
};

export default MembershipCard;
