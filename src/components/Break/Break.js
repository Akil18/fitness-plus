import React from 'react';
import './Break.css'

const Break = (props) => {
    return (
        <button className='item' onClick={(event) => props.handleBreak(props.break, event)}>
            {props.break}s
        </button>
    );
};

export default Break;