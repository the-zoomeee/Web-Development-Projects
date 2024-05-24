import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </nav>
        <Routes>
          <Route path="/" exact element={<ProductList/>} />
          <Route path="/cart" element={<ShoppingCart/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
