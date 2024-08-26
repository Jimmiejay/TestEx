import React from 'react';
import './myproducts.css'
import CallProduct from '../Callproduct/CallProduct';
import SearchBar from '../../../components/SearchBar/SearchBar'
import Paom from '../../../assets/พี่ออม.png'
import { useNavigate } from 'react-router-dom';

const MyProducts = () => {
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm)
  };

  const handleImageClick = () => {
    navigate('/api/marketplace/myproducts');
  };

  return (
    <div className='myproducts-container'>
      <div className='myproducts-content'>
        <div className='myproducts-txt'>
          <h1>สินค้าของฉัน</h1>
        </div>
        <div className='myproducts-profile'>
          <img
            src={Paom}
            alt="P'Aom"
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
          />
          <div className='myproducts-searchbar'>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        <div className='myproducts-call-product'>
          <CallProduct />
          <CallProduct />
          <CallProduct />
        </div>
      </div>
    </div>
  )
}

export default MyProducts