import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './rankingcard.css';
import PAom from '../../../assets/พี่ออม.png';
import PlatinumCrown from '../../../assets/platinumcrown.png';
import GoldCrown from '../../../assets/goldcrown.png';
import RedCrown from '../../../assets/redcrown.png';
import SilverCrown from '../../../assets/silvercrown.png';
import Callrankingprogress from '../../../components/RankingProgress/Callrankingprogress';



const RankingCard = () => {
    const [userData, setUserData] = useState({
        displayName: 'aom',
        score: 659,
        profileImgUrl: PAom,
        crownImgUrl: ''
    });

    // useEffect(() => {
    //     // ฟังก์ชันในการดึงข้อมูลจากฐานข้อมูล
    //     const fetchUserData = async () => {
    //         try {
    //             const response = await axios.get('/api/userData'); // ปรับ URL ตามที่คุณตั้งค่า API
    //             const { displayName, score, profileImgUrl } = response.data;

    //             let crownImgUrl = '';
    //             if (score >= 0 && score <= 250) {
    //                 crownImgUrl = SilverCrown;
    //             } else if (score >= 251 && score <= 500) {
    //                 crownImgUrl = GoldCrown;
    //             } else if (score >= 501 && score <= 750) {
    //                 crownImgUrl = PlatinumCrown;
    //             } else if (score > 750) {
    //                 crownImgUrl = RedCrown;
    //             }

    //             setUserData({
    //                 displayName,
    //                 score,
    //                 profileImgUrl,
    //                 crownImgUrl
    //             });
    //         } catch (error) {
    //             console.error('Error fetching user data:', error);
    //         }
    //     };

    //     fetchUserData();
    // }, []);

    useEffect(() => {
        // คำนวณ crownImgUrl ตามคะแนน
        let crownImgUrl = '';
        if (userData.score >= 0 && userData.score <= 250) {
            crownImgUrl = SilverCrown;
        } else if (userData.score >= 251 && userData.score <= 500) {
            crownImgUrl = GoldCrown;
        } else if (userData.score >= 501 && userData.score <= 750) {
            crownImgUrl = PlatinumCrown;
        } else if (userData.score > 750) {
            crownImgUrl = RedCrown;
        }

        // อัพเดตค่าใน userData
        setUserData(prevState => ({
            ...prevState,
            crownImgUrl
        }));
    }, [userData.score]); // จะคำนวณ crownImgUrl ทุกครั้งที่ score เปลี่ยนแปลง


    return (
        <div className='rankingcard'>
            <div className="card">
                <div className="header">
                    <img className='profile-img' src={userData.profileImgUrl} alt="Profile" />
                    <div className="user-info">
                        <h2>{userData.displayName}</h2>
                        <div className='score-container'>
                            <div className="score-label">คะแนนปัจจุบัน</div>
                            <div className="score-value-container">
                                <div className="score-circle">
                                    <img src={userData.crownImgUrl} alt="Crown" />
                                </div>
                                <div className="score-value">{userData.score} คะแนน</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='note-text'>
                    <h6>
                        หมายเหตุ : คะแนนนี้ได้มาจากการช่วยเหลือต่อเพื่อนร่วมงาน
                        และการเข้าร่วมกิจกรรมของบริษัท เช่น outing และ meeting
                    </h6>
                </div>
                <div className="horizontal-line"></div>
                <Callrankingprogress />
            </div>
        </div>
    );
};
export default RankingCard