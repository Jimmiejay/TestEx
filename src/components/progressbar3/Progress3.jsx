import React from 'react'
import './progress3.css'
import coin from '../../assets/pcoin.png'


const Progress3 = ({completed}) => {
  return (
    <div className="progress3-container">
    <div
      className="progress3-filler"
      style={{ width: `${completed}%` }}
    >
      <div
        className="progress3-indicator"
        style={{ left: `${completed}%` }}
      >
        <img src={coin} alt="coin" />
      </div>
    </div>
  </div>
  );
};

export default Progress3