import React, { useState, useEffect } from 'react'
import ProgressBar2 from './Progress2'

const CallProgress2 = () => {
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        // Fetch data from your API and update `completed` value
        const intervalId = setInterval(() => {
          // Replace this with actual API call
          setCompleted(Math.floor(Math.random() * 100) + 1);
        }, 5000);

        return () => clearInterval(intervalId);
    });

  return (
    <div>
        <h1>Progress Bar Example</h1>
      <ProgressBar2 completed={completed} />
      <p>คะแนนปัจจุบัน: {completed}</p>
      <p>หมายเหตุ: คะแนนนี้ได้มาจากการช่วยเหลือเพื่อนร่วมงานและการเข้าร่วมกิจกรรมของบริษัท เช่น outing และ meeting</p>
    </div>
  )
}

export default CallProgress2