import React from 'react';
import './Product.css'

const Product = ({product}) => {
    console.log(product)
    const {productName, picture, time} = product;
    return (
        <div className='card'>
            <img className='picture' src={picture} alt={productName} />
            <h2>{productName}</h2>
            <h4>Time: {time} minutes</h4>
            <button className='btn-add'>Add to List</button>
        </div>
    );
};

export default Product;