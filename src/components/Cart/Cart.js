import React, { useState } from 'react';
import './Cart.css';
import Break from '../Break/Break';

const Cart = () => {
    const [breaks, setBreaks] = useState([60, 120, 240, 360]);

    return (
        <div>
            <h2>John Doe</h2>
          <div className='user-info'>
              <h4>H: 6ft</h4>
              <h4>W: 75kg</h4>
              <h4>A: 24yrs</h4>
          </div>
          <h3>Add A Break</h3>
          <div className='break-section'>
              {
                breaks.map(breakTime => <Break key={breakTime} break={breakTime}></Break>)
              }
          </div>
          <h3>Exercise Details</h3>
          <div className='user-info'>
              <p>Excercise time:</p>
          </div>
          <div className='user-info'>
              <p>Excercise time:</p>
          </div>
        </div>
    );
};

export default Cart;