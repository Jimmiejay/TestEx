import React, { useState } from 'react';
import './rewardconfirm.css';
import { useLocation } from 'react-router-dom';
// import ClipLoader from "react-spinners/ClipLoader";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Button from '../../../components/Button/LongButton/LongButton'
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
            title: 'แลกรางวัลสำเร็จ',
            html: `<p>คุณมียอดคงเหลือ ${newPoints} คะแนน</p>`,
            confirmButtonText: 'เรียบร้อย',
            confirmButtonColor: '#29AE4C',
            width: '375px',
            height: '290px',
            customClass: {
                popup: 'rewardconfirm-popup-class',
                confirmButton: 'rewardconfirm-button-class'
            }
        });
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
                <div className='rewardconfirm-footer'>
                    <div onClick={handleRedeem} type="button" className={`confirm-button ${isRedeemed ? 'disabled' : ''}`} >
                        <Button text={isRedeemed ? 'ดำเนินการเรียบร้อยแล้ว' : 'ยืนยัน'} disabled={isRedeemed} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RewardConfirm