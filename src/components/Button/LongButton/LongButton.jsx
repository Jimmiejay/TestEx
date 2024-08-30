import React from 'react';
import './longbutton.css';

const LongButton = (props) => {

    const { text, disabled } = props;

    return (
        <>
            <button className={`LongBtn ${disabled ? 'disabled' : ''}`} disabled={disabled}>
                {text}
            </button>
        </>
    )
}

export default LongButton