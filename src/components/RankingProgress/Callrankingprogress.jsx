import React, { useEffect, useState } from 'react';
import RankingProgress from './RankingProgress'

const Callrankingprogress = () => {
    const [completed, setCompleted] = useState()
    const maxScore = 1000 // คะแนนสูงสุดที่เป็นไปได้

    // ข้อมูลผู้เล่นและคะแนน
    const players = [
        { name: 'New', score: 850 },
        { name: 'aom', score: 659 },
        { name: 'jajah', score: 450 },
        { name: 'kook', score: 365 },
        { name: 'namfon', score: 245 }
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCompleted(Math.floor(Math.random() * maxScore) + 1)
        }, 5000);

        return () => clearInterval(intervalId);
    }, [])



    // คำนวณเปอร์เซ็นต์สำหรับ progressbar
    const progressPercentage = Math.min((completed / maxScore) * 100, 100)


    return (
        <div>
            {players.map((player, index) => {
                const progressPercentage = Math.min((player.score / maxScore) * 100, 100);
                return (
                    <div key={index} className="rankingprogress-wrapper">
                        {/* แสดงชื่อผู้เล่นทางด้านซ้าย */}
                        <div className="rankingprogress-name">{player.name}</div>
                        {/* ส่ง progressPercentage และ score ไปยัง RankingProgress */}
                        <RankingProgress completed={progressPercentage} score={player.score} />
                    </div>
                );
            })}
            {/* <RankingProgress completed={progressPercentage} score={completed}  /> */}
        </div>
    );
};

export default Callrankingprogress