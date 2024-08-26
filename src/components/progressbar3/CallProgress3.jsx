import React, { useEffect, useState } from 'react'
import Progress3 from './Progress3';

const CallProgress3 = () => {
    const [completed, setCompleted] = useState(563)
    const maxScore = 10000 // คะแนนสูงสุดที่เป็นไปได้

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCompleted(Math.floor(Math.random() * maxScore) + 1)
        }, 5000);

        return () => clearInterval(intervalId);
    }, [])

    // คำนวณเปอร์เซ็นต์สำหรับ progressbar
    const progressPrecentage = Math.min((completed / maxScore) * 100, 100)
    return (
        <div>
            <Progress3 completed={progressPrecentage} />
            {/* <p>คะแนนปัจจุบัน: {completed}</p> */}
        </div>
    )
}

export default CallProgress3