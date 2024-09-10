import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Home from "./Home";
import Cart from "./Cart"; 
import { CartProvider } from "react-use-cart";
import CartIcon from './CartIcon'; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'; 

function App() {
  return (
    <CartProvider>
      <Router>
        <CartIcon />
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
