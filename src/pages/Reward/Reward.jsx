import React, { useEffect, useState } from 'react';
import './reward.css';
import Labubu2 from '../../assets/labubu 2.png'
import PCoin from '../../assets/pcoin.png'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/ShortButton/ShortButton';
import Swal from 'sweetalert2';

const Reward = () => {
    const [currentPoints, setCurrentPoints] = useState(null); //เก็บคะแนนที่มี
    const [rewardPoints, setRewardPoints] = useState(null); //เก็บคะแนนที่ต้องใช้ในการแลก
    const [rewardName, setRewardName] = useState('');  //เก็บค่าชื่อของรางวัล
    const [rewardImage, setRewardImage] = useState(null); //เก็บค่ารูปของรางวัล
    const [rewardDate, setRewardDate] = useState(''); //เก็บค่าวันที่หมดอายุ
    const [pointImage, setPointImage] = useState(''); //เก็บค่ารูปเหรียญ
    const [description, setDescription] = useState(null); //เก็บค่ารายละเอียด
    const navigate = useNavigate();

    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        // กำหนดค่าต่างๆ ที่ต้องการภายใน useEffect
        setCurrentPoints(550);
        setRewardPoints(500);
        setRewardName("The Monsters Labubu Fall in Wild Vinyl Plush Doll");
        setRewardImage(Labubu2);
        setRewardDate("หมดอายุ 27 ก.ค. 2567");
        setDescription(`The Monsters LABUBU Fall in Wild Vinyl Plush Doll
                        เป็นของเล่นตุ๊กตาสะสมขนาดใหญ่ที่มี Labubu
                        ตัวละครสัตว์ประหลาดน่ารักที่ออกแบบโดย
                        Molly Labubu แต่งกายด้วยชุดสีขาวตกแต่งด้วย
                        ลายดอกไม้และกระเป๋าเป้สีฟ้าอ่อน พร้อมสำหรับการผจญภัย`);
        setPointImage(PCoin);
    }, []);

    if (!currentPoints || !rewardPoints || !rewardName || !description || !rewardImage || !rewardDate) {
        return <div>Loading...</div>; // แสดงข้อความ Loading ระหว่างรอข้อมูล
    }

    // useEffect(() => {
    //     // ฟังก์ชันดึงข้อมูลจากฐานข้อมูล
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('/api/reward-data'); // URL ของ API ที่จะดึงข้อมูล
    //             const data = response.data;

    //             // อัปเดต state ด้วยข้อมูลที่ได้จากฐานข้อมูล
    //             setCurrentPoints(data.currentPoints);
    //             setRewardPoints(data.rewardPoints);
    //             setRewardName(data.rewardName);
    //             setRewardImage(data.rewardImage);
    //             setRewardDate(data.rewardDate);
    //             setDescription(data.description);
    //             setPointImage(data.pointImage);
    //         } catch (error) {
    //             console.error('Error fetching reward data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []); // [] หมายถึงทำงานเพียงครั้งเดียวหลังจากคอมโพเนนต์ถูกเรนเดอร์

    // if (!currentPoints || !rewardPoints || !rewardName) {
    //     return <div>Loading...</div>; // แสดงข้อความ Loading ระหว่างรอข้อมูล
    // }

    const handleNextSubmit = (event) => {
        event.preventDefault();
        if (isSubmitting) return;

        if (currentPoints < rewardPoints) {
            // alert("คะแนนของคุณไม่พอสำหรับการแลกรางวัลนี้");
            Swal.fire({
                text: "คะแนนของคุณไม่พอสำหรับการแลกรางวัลนี้",
                icon: "warning",
                confirmButtonText: 'ย้อนกลับ',
                confirmButtonColor: '#ff4b4b',
                width: '375px',
                height: '290px',
                customClass: {
                    popup: 'reward-popup-class',
                    confirmButton: 'reward-button-class'
                }
            });
            return;
        }


        const formDataReward = {
            currentPoints,
            rewardPoints,
            rewardName,
            rewardImage,
            pointImage,
            rewardDate,
            description

        };
        // console.log('Form Data Submitted: ', formDataWFH);

        // ส่งข้อมูลไปยังหน้า RewardConfirm
        navigate('/reward/rewardconfirm', {
            state: {
                currentPoints, rewardImage, rewardName, pointImage, rewardPoints
            },
        });
    };

    return (
        <div className='reward-contrainer'>
            <div className="reward-card">
                <div className='rewardtxt'>
                    <h2>รางวัล</h2>
                </div>
                <div className="image-container">
                    <img src={rewardImage} alt="RewardImage" />
                </div>
                <div className="reward-content">
                    <h3>{rewardName}</h3>
                    <p className="reward-date">{rewardDate}</p>

                    {/* -- เส้นขีดใต้ --  */}
                    <div class="custom-line"></div>

                    <hr />

                    <h3>รายละเอียด</h3>
                    <p className="reward-description">{description}</p>

                    <div className="reward-footer">
                        <div className="reward-points">
                            <span>
                                <img src={pointImage} alt="Point Coin" />
                            </span>
                            <span className="current-points">{currentPoints}</span>
                            <span className="reward-points-divider">/{rewardPoints}</span> {/* แสดงคะแนนในรูปแบบ 650/500 */}
                        </div>
                        <div type="button" className={`redeem-btn ${isSubmitting ? 'disabled' : ''}`} >
                            <Button 
                            text={isSubmitting ? 'แลกแล้ว' : 'แลก'} 
                            disabled={currentPoints < rewardPoints} 
                            onClick={handleNextSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reward