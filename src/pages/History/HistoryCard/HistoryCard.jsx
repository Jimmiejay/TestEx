import React from 'react'
import './historycard.css'
import PAom from '../../../assets/พี่ออม.png'
import Coin from '../../../assets/pcoin.png'
import CallProgress3 from '../../../components/progressbar3/CallProgress3'

const HistoryCard = () => {
    return (
        <div className='historycard'>
            <div className='profile-card'>
                <img className='profile-img' src={PAom} alt="P'Aom" />
                <div className=' profile-txt'>
                    <h4>aom</h4>
                    <CallProgress3 />
                </div>
                <div className='score-container'>
                    <div className="score-label">คะแนนปัจจุบัน</div>
                    <div className="score-value-container">
                        <div className="score-circle">
                            <img src={Coin} alt="Coin" />
                        </div>
                        <div className="score-value">658 คะแนน</div>
                    </div>
                </div>
                <div className='profile-txt'>
                    <h6>
                        หมายเหตุ : คะแนนนี้ได้มาจากการช่วยเหลือต่อเพื่อนร่วมงาน
                        และการเข้าร่วมกิจกรรมของบริษัท <br/>เช่น outing และ meeting
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default HistoryCard