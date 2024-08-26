import React from 'react'
import './marketplace.css'
import CallProduct from './Callproduct/CallProduct'
import SearchBar from '../../components/SearchBar/SearchBar'
import Paom from '../../assets/พี่ออม.png'
import { useNavigate } from 'react-router-dom'


const Marketplace = () => {
    const navigate = useNavigate();

    const handleSearch = (searchTerm) => {
        console.log('Searching for:', searchTerm)
    };

    const handleImageClick = () => {
        navigate('/api/marketplace/myproducts');
    };

    return (
        <div className='marketplace-container '>
            <div className='marketplace-content'>
                <div className='marketplace-txt'>
                    <h1>ตลาดนิลิคอน</h1>
                </div>
                <div className='marketplace-profile'>
                    <img
                        src={Paom}
                        alt="P'Aom"
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
            </div>
        </div>
    );
};

export default Marketplace