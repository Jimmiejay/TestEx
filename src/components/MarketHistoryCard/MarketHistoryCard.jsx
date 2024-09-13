import React, { useEffect, useState } from 'react';
import './markethistorycard.css';
import Yoga from '../../assets/129.png';
import Ring from '../../assets/Ring.png';
import Powerpuffgirl from '../../assets/powerpuffgirl.png';
import Crybabybag from '../../assets/crybabybag.png';
import PCoin from '../../assets/pcoin.png';
import Paom from '../../assets/พี่ออม.png';
import ReceiveButton from '../Button/ShortButton/ShortButton';

import Swal from 'sweetalert2';


const MarketHistoryCard = () => {
  const [productImage, setProductImage] = useState([]);
  const [productName, setProductName] = useState([]);
  const [productDetail, setProductDetail] = useState([]);
  const [profileName, setProfileName] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [profilePhone, setProfilePhone] = useState('');
  const [points, setPoints] = useState([]);
  const [pointImage, setPointImage] = useState(''); //เก็บค่ารูปเหรียญ

  // ใช้ object หรือ array เพื่อเก็บสถานะของการกดยืนยันแยกกันสำหรับแต่ละการ์ด
  // const [products, setProducts] = useState([]); // เก็บข้อมูลสินค้าที่ดึงมาจากฐานข้อมูล
  const [isSuccess, setIsSuccess] = useState([]); // เก็บสถานะการกดยืนยันแยกตามสินค้าแต่ละตัว


  useEffect(() => {
    // กำหนดค่าต่างๆ ที่ต้องการภายใน useEffect
    setProductImage([Yoga, Ring, Powerpuffgirl, Crybabybag]);
    setProductName(['THE MONSTERS Lazy Yoga Series Figures',
      'Romantic Ring Box Series 3 Scene Sets',
      'CRYBABY× Powerpuff Girls Series-Card Holder Blind Box',
      'CRYBABY Sunset Concert Series-Cotton Filled Shoulder Bag']);
    setProductDetail(['ส่งต่อน้องบู้ Lazy Yoga ที่ใครเห็นเป็นต้องโดนตก !! \nยี่ห้อ : POP MART \nขนาด : 5.1-11.3 cm \nสภาพสินค้า : มือ 1 ยังไม่แกะกล่อง',
      'น้อง Romantic Ring - Skullpanda Close To You \nยี่ห้อ : POP MART \nขนาด : Height when opened 11.3cm \nสภาพสินค้า : มือ 1 แกะเช็คการ์ด',
      'Bunny Blossom \nยี่ห้อ : POP MART \nขนาด : 13cm*14cm \nสภาพสินค้า : มือ 1 แกะกล่อง เช็คการ์ด',
      'ส่งต่อกระเป๋าผ้า cry baby sunset \nยี่ห้อ : POP MART \nขนาด : 32*32*8cm \nสภาพสินค้า : มือ 1 ยังไม่แกะกล่อง'
    ]);
    setPoints(['430', '800', '320', '690']);
    setPointImage(PCoin);
    setProfileName('aom');
    setProfileImage(Paom);
    setProfilePhone('098-xxx-xxxx')
  }, []);

  // เรียก API แบบที่ 1
  // useEffect(() => {
  //   // ตัวอย่างการเรียก API เพื่อดึงข้อมูลประวัติการซื้อขายในตลาด
  //   axios.get('/api/market/history')
  //     .then(response => {
  //       const data = response.data;
  //       setProductImage(data.productImage); // เซ็ตข้อมูลรูปสินค้า
  //       setProductName(data.productName);   // เซ็ตชื่อสินค้า
  //       setProductDetail(data.productDetail); // เซ็ตรายละเอียดสินค้า
  //       setProfileName(data.profileName);   // เซ็ตชื่อโปรไฟล์
  //       setProfileImage(data.profileImage); // เซ็ตรูปโปรไฟล์
  //       setProfilePhone(data.profilePhone); // เซ็ตเบอร์โทรศัพท์
  //       setPoints(data.points);             // เซ็ตคะแนน
  //       setPointImage(data.pointImage);     // เซ็ตรูปเหรียญ
  //     })
  //     .catch(error => {
  //       console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
  //     });
  // }, []);

  // เรียก API แบบที่ 2
  // useEffect(() => {
  //   // ดึงข้อมูลจาก API
  //   axios.get('/api/products') // สมมติว่า endpoint ของคุณคือ /api/products
  //     .then((response) => {
  //       setProducts(response.data); // บันทึกข้อมูลสินค้าที่ได้มาใน state
  //       setIsSuccess(new Array(response.data.length).fill(false)); // เตรียม state สำหรับปุ่มยืนยัน
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching products:', error);
  //     });
  // }, []);



  const handleConfirm = (index) => {
    // เปิดหน้าต่างถามก่อนว่าได้รับของหรือไม่
    Swal.fire({
      title: "ได้รับสินค้าแล้วใช่หรือไม่",
      html: '<p class="markethistory-text-class">กดใช่ เพื่อยืนยันรับสินค้าแล้ว</p>',
      showCancelButton: true,
      confirmButtonText: "ใช่",
      cancelButtonText: 'ยกเลิก',
      reverseButtons: true, // สลับตำแหน่งปุ่ม ใช่ไปอยู่ด้านขวา ยกเลิกอยู่ด้านซ้าย
      width: '375px',
      height: '290px',
      customClass: {
        title: 'markethistory-title-class',
        popup: 'markethistory-popup-class',
        confirmButton: 'markethistory-confirmbutton-class',
        cancelButton: 'markethistory-canclebutton-class'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // ถ้าผู้ใช้กดยืนยันว่าได้รับของ
        const updatedConfirm = [...isSuccess]; // คัดลอก state ปัจจุบัน
        updatedConfirm[index] = true; // เปลี่ยนสถานะเฉพาะการ์ดที่กด
        setIsSuccess(updatedConfirm); // อัปเดตสถานะการยืนยัน

        // แจ้งเตือนว่ารับสินค้าแล้วสำเร็จ
        Swal.fire({
          title: "รับสินค้าสำเร็จ",
          html: '<p class="markethistory-text-class">คุณได้กดรับสินค้าสำเร็จ</p>',
          icon: "success",
          confirmButtonText: 'เรียบร้อย',
          confirmButtonColor: "#29AE4C",
          width: '375px',
          height: '290px',
          customClass: {
            title: 'markethistory-title-class',
            popup: 'markethistory-popup-class',
            confirmButton: 'markethistory-confirmbutton-class'
          }
        });
      }
    }).catch((error) => {
      // console.error('Something went wrong:', error);
      Swal.fire({
        title: "โอ้ว..ไม่นะ",
        html: '<p class="markethistory-text-class">มีอะไรบางอย่างผิดพลาด</p>',
        icon: "error",
        showCancelButton: true,  // เพิ่มการแสดงปุ่ม cancel
        showConfirmButton: false,
        cancelButtonText: 'ปิด',
        cancelButtonColor: "#CFCFCF",
        width: '375px',
        height: '290px',
        customClass: {
          title: 'markethistory-title-class',
          popup: 'markethistory-popup-class',
          cancelButton: 'markethistory-error-canclebutton-class'
        }
      });
    });
  };

  return (
    <div className='markethistory-frame'>
      {productImage.map((image, index) => ( //ถ้าใช้การเรียก API แบบที่ 2 ให้เปลี่ยนตรง image เป็น product แทน
        <div key={index} className='markethistory-card'>
          <img
            src={image}
            // src={product.imageUrl} // ใช้ URL รูปจาก database การเรียก API แบบที่ 2
            alt="productImage"
            className='markethistory-image' />
          <div className='markethistory-info'>
            <h3 className='markethistory-name'>{productName[index]}</h3>
            <p className='productdetail'>{productDetail[index]}</p>
            {/* การเรียก API แบบที่ 2 */}
            {/* <h3 className='markethistory-name'>{product.name}</h3>
            <p className='productdetail'>{product.detail}</p> */}
            <div className='user-group'>
              <img
                src={profileImage}
                // src={product.profileImageUrl} // URL รูปโปรไฟล์จาก database การเรียก API แบบที่ 2
                alt="profileImage"
                className='user-avatar'
              />
              <div className='user-info'>
                {profileName}<br />{profilePhone}
                {/* การเรียก API แบบที่ 2 */}
                {/* {product.profileName}<br />{product.profilePhone} */}
              </div>
            </div>
            <div className="points-container">
              <img src={pointImage} alt="Points" className="point-image" />
              <span>{points[index]}</span>
              {/* การเรียก API แบบที่ 2 */}
              {/* <img src={product.pointImageUrl} alt="Points" className="point-image" />
              <span>{product.points}</span> */}
              <div type="button" className={`confirm-button ${isSuccess[index] ? 'disabled' : ''}`}>
                <ReceiveButton
                  onClick={() => handleConfirm(index)} // ระบุ index ของการ์ดที่ถูกกด
                  disabled={isSuccess[index]}
                  text={isSuccess[index] ? 'ได้รับของแล้ว' : 'รับของ'} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MarketHistoryCard