import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { CartContext } from '../contexts/CartContext';
import '../styles.css'; 

const Header = () => {
    const { cart } = useContext(CartContext);
    const location = useLocation(); 

    return (
        <div className="header">
            <div className="header-container">
                {/* Home link */}
                <Link to="/" className="header-title">
                    Momentum Solutions Co
                </Link>
                {/* Cart link */}
                <Link to="/cart" className="cart-icon">
                    <i className="fas fa-shopping-cart"></i>
                    ({cart.length})
                </Link>
                {/* Conditional Home link */}
                {location.pathname !== '/' && (
                    <Link to="/" className="home-link">
                        Home
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;