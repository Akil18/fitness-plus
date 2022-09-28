import React from 'react';
import './Product.css'

const Product = (props) => {
    const {picture} = props;
    return (
        <div>
            <img className='picture' src={picture} alt="image" />            
        </div>
    );
};

export default Product;