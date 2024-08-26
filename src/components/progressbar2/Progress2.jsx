import React from 'react';
import './progress2.css'

const ProgressBar2 = ({ completed }) => {

  return (
    <div className="progress2-container">
    <div
      className="progress2-filler"
      style={{ width: `${completed}%` }}
    >
      <div
        className="progress2-indicator"
        style={{ left: `${completed}%` }}
      >
        P
      </div>
    </div>
  </div>
  );
};

export default ProgressBar2;