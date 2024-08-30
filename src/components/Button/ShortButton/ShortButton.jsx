import React from 'react';
import './shortbutton.css';

const ShortButton = (props) => {

    const { text, disabled } = props;

    return (
        <>
            <button className={`Btn ${disabled ? 'disabled' : ''}`} disabled={disabled}>
                {text}
            </button>
        </>
    )
}

export default ShortButton