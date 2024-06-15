import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart'; 
import CartProvider from './contexts/CartContext'; 


const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <CartProvider> {/* Wrap your entire application with CartProvider */}
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} /> {/* Define your cart route */}
          </Routes>
          <Sidebar />
          <Footer />
        </CartProvider>
      </Router>
    </div>
  );
};

export default App;