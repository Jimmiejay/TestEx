import React from 'react'
import './transfercard.css'
import PJa from '../../assets/พี่จ๋า.png'
import PMy from '../../assets/พี่มายด์.png'
import Nilecon from '../../assets/nilecon.png'

const TransferCard = ({ showMonth, showSpecificMonth }) => {
    const Useddata = {
        month: ["กรกฎาคม 2567","สิงหาคม 2567"],
        usedText: "คะแนนที่ถูกใช้",
        usedAvatar: [PJa, PMy, Nilecon],
        usedUser: ["jajah", "MYratchi","แลกของรางวัล"],
        usedDescription: ["ทำงานตรงเวลา ความใส่ใจในรายละเอียด","ไม่ใส่ใจในรายละเอียดของงาน แต่ทำงานตรงต่อเวลา",
            "The Monsters Labubu Fall in  Wild Vinyl Plush Doll"],
        usedTimestamp: ["20 ก.ค. 11:59 น.","20 ก.ค. 11:50 น.", "7 ส.ค.,11:59 น.","7 ส.ค.,11:50 น."],
        usedPoints: 1,
        usedPointsGift:500
    };

    return (
        <div className='transfer-container'>
            {showMonth && showSpecificMonth && (
                <div className='transfer-used-txt'><h4>{Useddata.month[1]}</h4></div>
            )}
            <div className='transfer-used-card'>
                <div className='transfer-txt'><h3>{Useddata.usedText}</h3></div>
                <div className="transfer-points negative">-{Useddata.usedPointsGift} Point</div>
                <hr className='transfer-dashed-line' />
                <img className='transfer-img' src={Useddata.usedAvatar[2]} alt="Nilecon" />
                <div className='transfer-txt'><h6>{Useddata.usedUser[2]}</h6></div>
                <div className='transfer-date'>{Useddata.usedTimestamp[3]}</div>
                <div className='transfer-message'>{Useddata.usedDescription[2]}</div>
            </div>
            {showMonth && (
                <div className='transfer-used-txt'><h4>{Useddata.month[0]}</h4></div>
            )}
            <div className='transfer-used-card'>
                <div className='transfer-txt'><h3>{Useddata.usedText}</h3></div>
                <div className="transfer-points negative">-{Useddata.usedPoints} Point</div>
                <hr className='transfer-dashed-line' />
                <img className='transfer-img' src={Useddata.usedAvatar[0]} alt="P'Ja" />
                <div className='transfer-txt'><h6>{Useddata.usedUser[0]}</h6></div>
                <div className='transfer-date'>{Useddata.usedTimestamp[0]}</div>
                <div className='transfer-message'>{Useddata.usedDescription[0]}</div>
            </div>
            <div className='transfer-used-card'>
                <div className='transfer-txt'><h3>{Useddata.usedText}</h3></div>
                <div className="transfer-points negative">-{Useddata.usedPoints} Point</div>
                <hr className='transfer-dashed-line' />
                <img className='transfer-img' src={Useddata.usedAvatar[1]} alt="P'My" />
                <div className='transfer-txt'><h6>{Useddata.usedUser[1]}</h6></div>
                <div className='transfer-date'>{Useddata.usedTimestamp[1]}</div>
                <div className='transfer-message'>{Useddata.usedDescription[1]}</div>
            </div>
        </div>
    );
};

export default TransferCard