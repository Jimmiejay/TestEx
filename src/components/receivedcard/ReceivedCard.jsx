import React from 'react'
import './receivedcard.css'
import PNew from '../../assets/พี่นิว.png'
import PSai from '../../assets/พี่ทราย.png'

const ReceivedCard = ({ showMonth }) => {
  const Receiveddata = {
    month: ["กรกฎาคม 2567", "สิงหาคม 2567"],
    receivedText: "คะแนนที่ได้รับ",
    receivedAvatar: [PNew, PSai],
    receivedUser: ["New", "SAI🍵 🍪🍦"],
    receivedDescription: ["ทำงานตรงเวลา ความใส่ใจในรายละเอียดและความมุ่งมั่นในการทำงานที่ได้รับมอบหมายโดยรวมๆ"
      , "ทำงานตรงเวลา ความใส่ใจในรายละเอียด"],
    receivedTimestamp: ["7 ส.ค. 11:59 น."],
    receivedPoints: 1
  };

  return (
    <div className='received-container'>
      {showMonth && <div className='received-txt'><h4>{Receiveddata.month[1]}</h4></div>}
      <div className='received-receive-card'>
        <div className='received-txt'><h3>{Receiveddata.receivedText}</h3></div>
        <div className="received-points  positive">+{Receiveddata.receivedPoints} Point</div>
        <hr className='received-dashed-line' />
        <img className='received-img' src={Receiveddata.receivedAvatar[0]} alt="P'New" />
        <div className='received-txt'><h6>{Receiveddata.receivedUser[0]}</h6></div>
        <div className='received-date'>{Receiveddata.receivedTimestamp}</div>
        <div className='received-message'>{Receiveddata.receivedDescription[0]}</div>
      </div>
      <div className='received-receive-card'>
        <div className='received-txt'><h3>{Receiveddata.receivedText}</h3></div>
        <div className="received-points  positive">+{Receiveddata.receivedPoints} Point</div>
        <hr className='received-dashed-line' />
        <img className='received-img' src={Receiveddata.receivedAvatar[1]} alt="P'Sai" />
        <div className='received-txt'><h6>{Receiveddata.receivedUser[1]}</h6></div>
        <div className='received-date'>{Receiveddata.receivedTimestamp}</div>
        <div className='received-message'>{Receiveddata.receivedDescription[1]}</div>
      </div>
    </div>
  )
}

export default ReceivedCard