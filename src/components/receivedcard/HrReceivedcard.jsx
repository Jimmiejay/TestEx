import React from 'react'
import './hrreceivedcard.css'
import HR from '../../assets/HR.png'


const HrReceivedcard = ({ showMonth }) => {
    const Hrdata = {
        month: "กรกฎาคม 2567",
        HrText: "คะแนนที่ได้รับ",
        HrAvatar: HR,
        HrUser: "HR",
        HrDescription: "ทำงานตรงเวลา ความใส่ใจในรายละเอียด",
        HrTimestamp: "20 ก.ค. 11:50 น.",
        HrPoints: 100
    };

    return (
        <div className='hr-received-container'>
            {showMonth && <div className='hr-received-txt'><h4>{Hrdata.month}</h4></div>}
            <div className='hr-received-card'>
                <div className='hr-received-txt'><h3>{Hrdata.HrText}</h3></div>
                <div className="hr-received-points positive">+{Hrdata.HrPoints} Point</div>
                <hr className='hr-received-dashed-line' />
                <img className='hr-received-img' src={Hrdata.HrAvatar} alt="HR" />
                <div className='hr-received-txt'><h6>{Hrdata.HrUser}</h6></div>
                <div className='hr-received-date'>{Hrdata.HrTimestamp}</div>
                <div className='hr-received-message'>{Hrdata.HrDescription}</div>
            </div>
        </div>
    )
}

export default HrReceivedcard