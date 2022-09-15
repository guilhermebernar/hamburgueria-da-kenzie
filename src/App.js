import './App.css';
import { useState } from 'react'
import {MainApp} from './App.style';
import Cart from './components/Cart/Cart';
import HeaderApp from './components/Header/Header';
import ProductsList from './components/ProductsList/ProductsList';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])

  return (
    <div className="App">
      <ToastContainer/>
      <HeaderApp
        products={products} 
        setFilteredProducts={setFilteredProducts}
      />
      <MainApp>
          <ProductsList 
            products={products} 
            setProducts={setProducts} 
            filteredProducts={filteredProducts} 
            currentSale={currentSale}
            setCurrentSale={setCurrentSale} 
          />
          <Cart 
            currentSale={currentSale} 
            setCurrentSale={setCurrentSale} 
          />
      </MainApp>
    </div>
  );
}

export default App;
