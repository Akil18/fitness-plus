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

  const addToCart = (product, event) => {
    const newCart = [...cart, product];
    setCart(newCart);
    event.target.classList.add('btn-added');
    event.target.childNodes[0].data = 'Added ';
    event.target.childNodes[1].classList.remove('hide');
    event.target.childNodes[1].innerText = parseInt(event.target.childNodes[1].innerText) + 1;
  }

  const notify = () => toast('💪🏼 Good session!', {
        position: "bottom-right",
        autoClose: 2500,
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
          <div className='q-and-a'>
              <h2>Q: How does React work?</h2>
              <p>
                React is declarative, efficient and flexible in nature. It is made up of multiple components that work independently so it is flexible when only the data of a single component needs to be changed. The rendering is efficient in that case. Also, components can be nested inside other components to build a complex applications while maintaining an internal state of its own.
              </p>
              <h2>Q: Difference between props and state</h2>
              <p>
                Props are used to pass data from one component to another while state is used to store data within a component. Props are immutable while state is mutable. Props are passed from parent to child while state is managed within the component. Props are read-only while state is not.
              </p>
              <h2>Q: Why do we use useEffect other than loading data?</h2>
              <p>
                useEffect is used to perform side effects in functional components. Besides data fetching, it can be used to run after the initial render any new updates. It can also be used to clean up the previous effects before running the next effects.
              </p>
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
