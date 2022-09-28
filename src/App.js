import { useEffect, useState } from 'react';
import './App.css';
import Product from './components/Product/Product';
import Break from './components/Break/Break';
import logo from './logo.jpg';

function App() {
  const [products, setProducts] = useState([]);
  const [breaks, setBreaks] = useState([60, 120, 240, 360]);

  useEffect(() => {
    fetch(`api_data.json`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="App">
      <div className='main-section'>
          <div className='header'>
              <img className='logo' src={logo} alt="logo" />
              <h1>Fitness Plus</h1>
          </div>
          <div className='cards-container'>
              {
                products.map(product => <Product 
                  key={product.id}
                  product={product} 
                  ></Product>)
              }
          </div>
      </div>
      <div className='cart-container'>
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
    </div>
  );
}

export default App;
