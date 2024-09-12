import React, { useState } from 'react';
import './confirmexchange.css';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ConfirmButton from '../../../../components/Button/LongButton/LongButton'
const MySwal = withReactContent(Swal);

const ConfirmExchange = () => {
  const location = useLocation();
  const { productImage, productName, productDetail, profileName, profileImage,
    profilePhone, pointImage, rewardPoints, currentPoints,
    pickupLocation, datetime } = location.state || {};

  const [points, setPoints] = useState(currentPoints); // สถานะสำหรับยอดคงเหลือ
  const [isSuccess, setIsSuccess] = useState(false); // สถานะสำหรับป้องกันการกดซ้ำ

  //อันนี้แบบกำหนด isSuccess
  const handleConfirm = () => {
    const isSuccess = true;
    // คุณสามารถเปลี่ยนเป็นเงื่อนไขจริงที่ต้องการตรวจสอบ

    const newPoints = points - rewardPoints;
    setPoints(newPoints);
    // ถ้ากระบวนการสำเร็จ ให้ตั้งค่า isSuccess เป็น true
    // หากไม่สำเร็จ ปุ่มจะยังคงทำงานต่อไป
    setIsSuccess(true); // ตั้งค่าให้ปุ่มถูก disabled หลังจากกด

    if (isSuccess) {
      Swal.fire({
        title: "คุณได้แลกสินค้า",
        html: `<p>คุณมียอดคงเหลือ ${newPoints} คะแนน</p>`,
        icon: "success",
        confirmButtonText: 'เรียบร้อย',
        confirmButtonColor: "#29AE4C",
        width: '375px',
        height: '290px',
        customClass: {
          popup: 'confirmexchange-popup-class',
          confirmButton: 'confirmexchange-button-class'
        }
      }).then(() => {
        setisTransferDone(true);
      });
    } else {
      Swal.fire({
        title: "โอ้ว..ไม่นะ",
        text: "มีอะไรบางอย่างผิดพลาด",
        icon: "error",
        showCancelButton: true,  // เพิ่มการแสดงปุ่ม cancel
        showConfirmButton: false,
        cancelButtonText: 'ปิด',
        cancelButtonColor: "#CFCFCF",
        width: '375px',
        height: '290px',
        customClass: {
          popup: 'confirmexchange-popup-class',
          confirmButton: 'confirmexchange-button-class'
        }
      });
    }
  }

  return (
    <div className='confirmexchange-container'>
      <div className='confirmexchange-grid'>
        <div className='row-1'>
          <div className='header title'>
            <h2>ยืนยันการแลกสินค้า</h2>
          </div>
        </div>
        <div className='row-2'>
          <div className='confirmexchange-card'>
            <img src={productImage} alt={productImage} className="confirmexchange-image" />
            <div className="confirmexchange-info">
              <h3 className='confirmexchange-name'>{productName}</h3>
              <p className='productdetail'>{productDetail}</p>
              <div className='user-group'>
                <img
                  src={profileImage}
                  alt="profileImage"
                  className='user-avatar'
                />
                <div className='user-info'>
                  {profileName}<br />{profilePhone}
                </div>
              </div>
              <div className="points-container">
                <img src={pointImage} alt="Points" className="point-image" />
                <span>{rewardPoints}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row-3'>
          <div className='confirmexchange-group'>
            <label htmlFor="pickupLocation">สถานที่รับสินค้า</label>
            <input type="text" id="pickupLocation" value={pickupLocation} readOnly />
          </div>
        </div>
        <div className='row-4'>
          <div className='confirmexchange-group'>
            <label htmlFor="pickupLocation">วันและเวลา</label>
            <input type="text" id='datetime' value={datetime} readOnly />
          </div>
        </div>
        <div className='row-5'>
          <div type="button" className={`confirm-button ${isSuccess ? 'disabled' : ''}`}>
            <ConfirmButton
              onClick={handleConfirm}
              disabled={isSuccess}
              text={isSuccess ? 'ดำเนินการเรียบร้อยแล้ว' : 'ยืนยัน'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmExchange