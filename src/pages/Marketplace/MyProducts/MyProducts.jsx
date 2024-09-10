import React, { useEffect, useState } from 'react';
import './myproducts.css'
import CallProduct from '../Callproduct/CallProduct';
import SearchBar from '../../../components/SearchBar/SearchBar'
import Paom from '../../../assets/พี่ออม.png'
import Add from '../../../assets/newadd.png'
import { useNavigate } from 'react-router-dom';

const MyProducts = () => {
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // กำหนดค่าต่างๆ ที่คุณต้องการภายใน useEffect
    setProfileImage(Paom);
}, []);

  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm)
  };

  const handleImageClick = () => {
    navigate('/marketplace/myproducts');
  };

  const handleClick = () => {
    navigate('/marketplace/formproduct');
};

  return (
    <div className='myproducts-container'>
      <div className='myproducts-content'>
        <div className='myproducts-txt'>
          <h1>สินค้าของฉัน</h1>
        </div>
        <div className='myproducts-profile'>
          <img
            src={profileImage}
            alt="profileImage"
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
          />
          <div className='myproducts-searchbar'>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        <div className='myproducts-call-product'>
          <CallProduct owner="aom"/> {/* ส่งชื่อผู้ใช้เพื่อกรองสินค้า */}
        </div>
        <button className="floating-button" onClick={handleClick}>
          <i className="fas fa-plus">
            <img src={Add} alt="Add" />
          </i>
        </button>
      </div>
    </div>
  )
}

export default MyProducts