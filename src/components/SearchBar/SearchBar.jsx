import React, { useState } from 'react';
import './searchbar.css';
import Add from '../../assets/add.png';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();


    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm)
    };
    
    const handlePlusClick = () => {
        navigate('/api/marketplace/formproduct');
    };

    return (
        <div className='search-container'>
            <div className="search-bar" onSubmit={handleSearch}>
                <div className='input-wrapper3'>
                    {/* ซ่อนไอคอนเมื่อ searchTerm ไม่ว่างเปล่า */}
                    {!searchTerm &&<FaSearch className="search-icon" />}
                    <input
                        type="text"
                        placeholder="ค้นหา"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <button className="add-button">
                <img 
                src={Add} 
                alt="add" 
                onClick={handlePlusClick}
                style={{ cursor: 'pointer' }}/>
            </button>
        </div>
    );
};

export default SearchBar