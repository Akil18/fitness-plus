import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Product from './components/Product/Product';
import logo from './logo.jpg';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`api_data.json`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  }

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
                  addToCart={addToCart}
                  ></Product>)
              }
          </div>
      </div>
      <div className='cart-container'>
          <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default App;
