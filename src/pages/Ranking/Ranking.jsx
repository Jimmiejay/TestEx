import React from 'react'
import './ranking.css'
import RankingBG from '../../assets/rankingbg.png'
import RankingCard from './RankingCard/RankingCard';
import HistoryPoint from './HistoryPoint/HistoryPoint'



const Ranking = () => {
    return (
        <div className='ranking-container'>
            <div className='ranking-content'>
                <div className='top-row'>
                    <img className='bg-img' src={RankingBG} alt="RankingBG" />
                    <div className='ranking-txt txtranking '>ตารางคะแนน</div>
                    <RankingCard />
                </div>
                <div className='low-row'>
                    < HistoryPoint/>
                </div>
            </div>
        </div>
    );
};

export default Ranking