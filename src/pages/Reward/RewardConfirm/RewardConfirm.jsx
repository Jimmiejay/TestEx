import React, { useState } from 'react';
import './rewardconfirm.css';
import { useLocation } from 'react-router-dom';
// import ClipLoader from "react-spinners/ClipLoader";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const RewardConfirm = () => {
    const location = useLocation();
    const { currentPoints, rewardImage, rewardName, pointImage, rewardPoints } = location.state
    // const [loading, setLoading] = useState(true);

    const [points, setPoints] = useState(currentPoints); // สถานะสำหรับยอดคงเหลือ
    const [isRedeemed, setIsRedeemed] = useState(false); // สถานะสำหรับป้องกันการกดซ้ำ

    const handleRedeem = async () => {
        if (isRedeemed) return; // ป้องกันการกดซ้ำระหว่างกำลังประมวลผล

        const newPoints = points - rewardPoints;
        setPoints(newPoints);
        setIsRedeemed(true); // ตั้งค่าให้ปุ่มถูก disabled หลังจากกด

        // เรียก MySwal.fire ทันทีหลังจากที่ตั้งค่า setPoints
        await MySwal.fire({
            icon: 'success',
            title: 'คุณได้ใช้สิทธิ์แล้ว',
            html: `<p>คุณมียอดคงเหลือ ${newPoints} points</p>`,
            confirmButtonText: 'ย้อนกลับ',
            confirmButtonColor: '#ff4b4b',
            width: '375px',
            height: '291px',
        });


        // // เปลี่ยนหน้าไปยัง /api/reward หลังจากที่กดปุ่มยืนยัน
        // navigate('/api/reward', {
        //     state: { points: newPoints, isRedeemed: true } // ส่งคะแนนใหม่ และส่งสถานะ isRedeemed กลับไปด้วย
        // });
  
    };

    return (
        <div className='rewardconfirm-container'>
            <div className='rewardconfirm-header'>
                <h2 className='rewardconfirm-title'>ยืนยันการแลกสินค้า</h2>
                <div className='rewardconfirm-card'>
                    <img src={rewardImage} alt={rewardName} className="reward-image" />
                    <div className="reward-info">
                        <h3 className='reward-name'>{rewardName}</h3>
                        <div className="points-container">
                            <img src={pointImage} alt="Points" className="point-image" />
                            <span>{rewardPoints}</span>
                        </div>
                    </div>
                </div>
                <button className="confirm-button" onClick={handleRedeem} disabled={isRedeemed}>
                    {isRedeemed ? 'ดำเนินการเรียบร้อยแล้ว' : 'ยืนยัน'}
                </button>
            </div>
        </div>
    );
};

export default RewardConfirm