import React from 'react';
import './longbutton.css';

const LongButton = (props) => {

    const { text, disabled, onClick } = props;

    return (
        <>
            <button className={`LongBtn ${disabled ? 'disabled' : ''}`} disabled={disabled} onClick={onClick}>
                {text}
            </button>
        </>
    )
}

export default LongButton