import React from 'react';
import './shortbutton.css';

const ShortButton = (props) => {

    const { text, disabled, onClick } = props;

    return (
        <>
            <button className={`Btn ${disabled ? 'disabled' : ''}`} disabled={disabled} onClick={onClick}>
                {text}
            </button>
        </>
    )
}

export default ShortButton