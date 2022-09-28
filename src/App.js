import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const notify = () => toast('💪🏼 Good session!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

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
          <Cart notify={notify} cart={cart}></Cart>
      </div>
      <ToastContainer 
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
    </div>
  );
}

export default App;
