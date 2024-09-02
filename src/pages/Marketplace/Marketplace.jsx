import React, { useEffect, useState } from 'react'
import './marketplace.css'
import CallProduct from './Callproduct/CallProduct'
import SearchBar from '../../components/SearchBar/SearchBar'
import Paom from '../../assets/พี่ออม.png'
import Add from '../../assets/newadd.png'
import { useNavigate } from 'react-router-dom'


const Marketplace = () => {
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
        <div className='marketplace-container '>
            <div className='marketplace-content'>
                <div className='marketplace-txt'>
                    <h1>ตลาดนิลิคอน</h1>
                </div>
                <div className='marketplace-profile'>
                    <img
                        src={profileImage}
                        alt="profileImage"
                        onClick={handleImageClick}
                        style={{ cursor: 'pointer' }}
                    />
                    <div className='marketplace-searchbar'>
                        <SearchBar onSearch={handleSearch} />
                    </div>
                </div>
                <div className='marketplace-call-product'>
                    <CallProduct />
                    <CallProduct />
                    <CallProduct />
                    <CallProduct />
                    <CallProduct />
                    <CallProduct />
                    <CallProduct />
                    <CallProduct />
                    <CallProduct />
                    <CallProduct />
                </div>
                <button className="floating-button" onClick={handleClick}>
                    <i className="fas fa-plus">
                        <img src={Add} alt="Add" />
                    </i>
                </button>
            </div>
        </div>
    );
};

export default Marketplace