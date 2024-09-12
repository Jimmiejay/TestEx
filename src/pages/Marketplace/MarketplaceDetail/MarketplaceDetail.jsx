import React, { useEffect, useState } from 'react';
import './marketplacedetail.css';
import Yoga from '../../../assets/129.png';
import Paom from '../../../assets/พี่ออม.png';
import PCoin from '../../../assets/pcoin.png'
import { useNavigate } from 'react-router-dom';
import NextButton from '../../../components/Button/ShortButton/ShortButton';


const MarketplaceDetail = () => {
  const [productImage, setProductImage] = useState();
  const [productName, setProductName] = useState();
  const [productDetail, setProductDetail] = useState();
  const [profileName, setProfileName] = useState();
  const [profileImage, setProfileImage] = useState(null);
  const [profilePhone, setProfilePhone] = useState('');
  const [currentPoints, setCurrentPoints] = useState(null); //เก็บคะแนนที่มี
  const [rewardPoints, setRewardPoints] = useState(null); //เก็บคะแนนที่ต้องใช้ในการแลก
  const [pointImage, setPointImage] = useState(''); //เก็บค่ารูปเหรียญ

  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // กำหนดค่าต่างๆ ที่ต้องการภายใน useEffect
    setProductImage(Yoga);
    setProductName('THE MONSTERS Lazy Yoga Series Figures')
    setProductDetail('ส่งต่อน้องบู้ Lazy Yoga ที่ใครเห็นเป็นต้องโดนตก !! \nยี่ห้อ : POP MART \nขนาด : 5.1-11.3 cm \nสภาพสินค้า : มือ 1 ยังไม่แกะกล่อง ')
    setCurrentPoints(653);
    setRewardPoints(430);
    setPointImage(PCoin);
    setProfileName('aom');
    setProfileImage(Paom);
    setProfilePhone('098-xxx-xxxx')
  }, []);

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

    const formDataExchange = {
      productImage,
      productName,
      productDetail,
      profileName,
      profileImage,
      profilePhone,
      pointImage,
      currentPoints,
      rewardPoints


    };
    console.log('Form Data Submitted: ', formDataExchange);

    // ส่งข้อมูลไปยังหน้า exchange
    navigate('/marketplace/marketplacedetail/exchange', {
      state: {
        productImage, productName, productDetail, profileName, 
        profileImage, profilePhone, pointImage, rewardPoints, currentPoints
      },
    });
  };

  // useEffect(() => {
    //     // ฟังก์ชันดึงข้อมูลจากฐานข้อมูล
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('/api/reward-data'); // URL ของ API ที่จะดึงข้อมูล
    //             const data = response.data;

    //            // อัปเดต state ด้วยข้อมูลที่ได้จากฐานข้อมูล
    //            setProductImage(data.productImage);
    //            setProductName(data.productName)
    //            setProductDetail(data.productDetail)
    //            setCurrentPoints(data.currentPoints);
    //            setRewardPoints(data.rewardPoints);
    //            setPointImage(data.pointImage);
    //            setProfileName(data.profileName);
    //            setProfileImage(data.profileImage);
    //            setProfilePhone(data.profilePhone)
    //         } catch (error) {
    //             console.error('Error fetching reward data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []); // [] หมายถึงทำงานเพียงครั้งเดียวหลังจากคอมโพเนนต์ถูกเรนเดอร์


  //   const handleImageClick = () => {
  //     navigate('/marketplace/myproducts');
  // };

  return (
    <div className='marketplacedetail-container'>
      <div className='marketplacedetail-grid'>
        <div className='row-1'>
          <div className='header'>
            <h2 className="title">ตลาดนิลิคอน</h2>
          </div>
        </div>
        <div className='row-2'>
          <img
            src={productImage}
            alt="productImage"
            className='productimage'
          />
        </div>
        <div className='row-3'>
          <div className='marketplacedetail-group'>
            <div className='productname'>{productName}</div>
          </div>
        </div>
        <div className='row-4'>
          <div className='marketplacedetail-group'>
            <div className='productdetail'>{productDetail}</div>
          </div>
        </div>
        <div className='row-5'>
          <div className='marketplacedetail-group'>
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
          </div>
        </div>
        <div className='row-6'>
          <div className='reward-footer'>
          <div className='points-group'>
            <span>
              <img
                src={pointImage} alt="profileImage" className='points-image '
              />
            </span>
            <span className="current-points">{currentPoints}</span>
            <span className="points-divider">/{rewardPoints}</span> {/* แสดงคะแนนในรูปแบบ currentPoints/rewardPoints */}
          </div>
          <div onClick={handleNextSubmit} type="button" className={`redeem-btn ${isSubmitting ? 'disabled' : ''}`} >
            <NextButton text={isSubmitting ? 'แลกแล้ว' : 'แลกเลย'} disabled={currentPoints < rewardPoints} />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketplaceDetail