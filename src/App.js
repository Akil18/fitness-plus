import { useEffect, useState } from 'react';
import './App.css';
import Product from './components/Product/Product';
import logo from './logo.jpg';

function App() {
  const [products, setProducts] = useState([]);

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
                  picture={product.picture}  
                  ></Product>)
              }
          </div>
      </div>
      <div className='cart-container'>
          <h2>John Doe</h2>
      </div>
    </div>
  );
}

export default App;
