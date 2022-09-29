import React from 'react';
import './Product.css'

const Product = ({product, addToCart}) => {
    const {productName, picture, time} = product;
    return (
        <div className='card'>
            <img className='picture' src={picture} alt={productName} />
            <h2>{productName}</h2>
            <h4>Time: {time} minutes</h4>
            <button className='btn-add' onClick={(event) => addToCart(product, event)}>
                Add to List
                <span className='hide number'> 0</span>
            </button>
        </div>
    );
};

export default Product;