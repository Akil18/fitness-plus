import React from 'react';
import './Break.css'

const Break = (props) => {
    return (
        <button className='item'>
            {props.break}
        </button>
    );
};

export default Break;