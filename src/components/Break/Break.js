import React from 'react';
import './Break.css'

const Break = (props) => {
    return (
        <button onClick={() => props.handleBreak(props.break)} className='item'>
            {props.break}
        </button>
    );
};

export default Break;