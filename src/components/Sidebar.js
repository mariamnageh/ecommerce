import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import '../styles.css';
const Sidebar = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="sidebar">
            <h2>Your Shopping Cart</h2>
            {cart.length === 0 ? (
                <p className="sidebar-empty">Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((product) => (
                        <div key={product.id} className="sidebar-item">
                            <div className="sidebar-item-image">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    style={{ maxWidth: '100px' }} 
                                />
                            </div>
                            <div className="sidebar-item-details">
                                <h3>{product.title}</h3>
                                <p><strong>Category:</strong> {product.category}</p>
                                <p><strong>Price:</strong> ${product.price}</p>
                                {/* Add more product details as needed */}
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Sidebar;