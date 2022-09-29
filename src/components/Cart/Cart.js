import React, { useState } from 'react';
import './Cart.css';
import Break from '../Break/Break';

const Cart = ({cart, notify}) => {
    const breaks = [60, 120, 240, 360];
    const [breakTime, setBreakTime] = useState(60);
    const total = cart.reduce((total, product) => total + product.time, 0);

    const handleBreak = (time) => {
        setBreakTime(time);
    }

    return (
        <div className='cart'>
            <h2 className='user'>John Doe</h2>
          <div className='user-info'>
              <h4>H: 6ft</h4>
              <h4>W: 75kg</h4>
              <h4>A: 24yrs</h4>
          </div>
          <h3>Add A Break</h3>
          <div className='break-section'>
              {
                breaks.map(breakTime => <Break key={breakTime} break={breakTime} handleBreak={handleBreak}></Break>)
              }
          </div>
          <h3>Exercise Details</h3>
          <div className='user-info'>
              <p>Excercise time: {total} minutes</p>
          </div>
          <div className='user-info'>
              <p>Break time: {breakTime} seconds</p>
          </div>
          <button onClick={() => notify()} className='completed'>Activity Completed</button>
        </div>
    );
};

export default Cart;