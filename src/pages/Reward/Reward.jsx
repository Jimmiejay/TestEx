import React, { useState } from 'react';
import './reward.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Labubu from '../../assets/labubu.png'
import PCoin from '../../assets/pcoin.png'

const MySwal = withReactContent(Swal);

const Reward = () => {
    const [points, setPoints] = useState(659);
    const [isRedeemed, setIsRedeemed] = useState(false);

    // แบบกดได้ที่ 1 แต่ยังไม่ได้ทำให้ปุ่ม disable
    // const handleRedeem = () => {
    //     const newPoints = points - 500; // สมมติว่าแต่ละรางวัลใช้ 500 points
    //     setPoints(newPoints);

    //     MySwal.fire({
    //         icon: 'success',
    //         title: 'คุณได้ใช้สิทธิ์แล้ว',
    //         html: `<p>คุณมียอดคงเหลือ ${newPoints} points</p>`,
    //         confirmButtonText: 'ย้อนกลับ',
    //         confirmButtonColor: '#3085d6',
    //         customClass: {
    //             popup: 'my-swal'
    //         }
    //     });
    // };

    // แบบกดได้ที่ 2
    const handleRedeem = async () => {
        if (isRedeemed) return; // ป้องกันการกดซ้ำระหว่างกำลังประมวลผล

        const newPoints = points - 500;
        setPoints(newPoints);
        setIsRedeemed(true); // ตั้งค่าให้ปุ่มถูก disabled หลังจากกด

        await MySwal.fire({
            icon: 'success',
            title: 'คุณได้ใช้สิทธิ์แล้ว',
            html: `<p>คุณมียอดคงเหลือ ${newPoints} points</p>`,
            confirmButtonText: 'ย้อนกลับ',
            confirmButtonColor: '#ff4b4b',
            width:'375px',
            height:'291px',     
          });
        };

    return (
        <div className='reward-contrainer'>
            <div className="reward-card">
                <div className='rewardtxt'>
                    <h2>Reward</h2>
                </div>
                <div className="image-container">
                    <img src={Labubu} alt="Labubu" />
                </div>
                <div className="reward-content">
                    <h3>The Monsters Labubu Fall in
                     Wild Vinyl Plush Doll</h3>
                    <p className="reward-date">หมดอายุ 27 ก.ค. 2567</p>

                    {/* -- เส้นขีดใต้ --  */}
                    <div class="custom-line"></div>

                    <h3>Description</h3>
                    <p className="reward-description">
                        The Monsters LABUBU Fall in Wild Vinyl Plush Doll
                        เป็นของเล่นตุ๊กตาสะสมขนาดใหญ่ที่มี Labubu
                        ตัวละครสัตว์ประหลาดน่ารักที่ออกแบบโดย
                        Molly Labubu <br /> แต่งกายด้วยชุดสีขาวตกแต่งด้วย
                        ลายดอกไม้และกระเป๋าเป้สีฟ้าอ่อน พร้อมสำหรับการผจญภัย
                    </p>
                    <div className="reward-footer">
                        <div className="reward-points">
                            <span>
                                <img src={PCoin} alt="P Coin" />
                            </span>
                            <span>500</span>
                        </div>
                        <button className={`redeem-btn ${isRedeemed ? 'disabled' : ''}`}
                            onClick={handleRedeem}
                            disabled={isRedeemed}
                        >
                            {isRedeemed ? 'ใช้สิทธิ์แล้ว' : 'Redeem'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reward