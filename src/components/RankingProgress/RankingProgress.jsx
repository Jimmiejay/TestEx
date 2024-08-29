import React from 'react';
import './rankingprogress.css';
import PlatinumCrown from '../../assets/platinumcrown.png';
import GoldCrown from '../../assets/goldcrown.png';
import RedCrown from '../../assets/redcrown.png';
import SilverCrown from '../../assets/silvercrown.png';

const RankingProgress = ({ completed, score }) => {

    let crown = 'silver';
    let color = '#CFCFCF';

    if (score <= 250) {
        crown = 'silver';
        color = '#CFCFCF';
    } else if (score <= 500) {
        crown = 'gold';
        color = '#FFB743';
    } else if (score <= 750) {
        crown = 'platinum';
        color = '#3498A6';
    } else if (score > 750) {
        crown = 'platinum';
        color = '#3498A6';
    }

    let crownImage;
    switch (crown) {
        case 'platinum':
            crownImage = PlatinumCrown;
            break;
        case 'gold':
            crownImage = GoldCrown;
            break;
        case 'red':
            crownImage = RedCrown;
            break;
        case 'silver':
            crownImage = SilverCrown;
            break;
        default:
            crownImage = PlatinumCrown;
    }

    return (
        <div className="rankingprogress-container">
            <div
                className="rankingprogress-filler"
                style={{ width: `${completed}%`, backgroundColor: color }}
            >
                <div
                    className="rankingprogress-indicator"
                    style={{ left: `${completed}%` }}
                >
                    <img src={crownImage} alt="crown" />
                </div>
            </div>
        </div>
    );
};

export default RankingProgress;
