// Cart.js
import Sidebar from '../components/Sidebar'
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import '../styles.css';

const Cart = () => {
    const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useContext(CartContext);
    const [totalPayment, setTotalPayment] = useState(0);

    useEffect(() => {
        calculateTotalPayment();
    }, [cart]);

    const calculateTotalPayment = () => {
        let total = 0;
        cart.forEach((product) => {
            total += product.price * product.quantity;
        });
        setTotalPayment(total);
    };

    const placeOrder = () => {
        alert('Order placed successfully!');
    };

    const handleIncrement = (itemId) => {
        incrementQuantity(itemId);
    };

    const handleDecrement = (itemId) => {
        decrementQuantity(itemId);
    };

    const handleRemove = (itemId) => {
        removeFromCart(itemId);
    };

    return (
        <div className="cart-container">
            <h2>Your Shopping Cart</h2>
            {cart.length === 0 ? (
                <p className="cart-empty">Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((product) => (
                        <div key={product.id} className="cart-item">
                            <div className="cart-item-image">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    style={{ maxWidth: '100px' }} 
                                />
                            </div>
                            <div className="cart-item-details">
                                <h3>{product.title}</h3>
                                <p><strong>Category:</strong> {product.category}</p>
                                <p><strong>Price:</strong> ${product.price}</p>
                                <div className="cart-item-actions">
                                    <button onClick={() => handleIncrement(product.id)}>+</button>
                                    <span>{product.quantity}</span>
                                    <button onClick={() => handleDecrement(product.id)}>-</button>
                                    <button onClick={() => handleRemove(product.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <p><strong>Total Payment:</strong> ${totalPayment}</p>
                    </div>
                    <button className="place-order-btn" onClick={placeOrder}>Place Order</button>
                </>
            )}
            <Link to="/" className="continue-shopping">Continue Shopping</Link>
        </div>
    );
};

export default Cart;