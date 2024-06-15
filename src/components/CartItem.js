import React from 'react';
import Sidebar from '../components/Sidebar';
const CartItem = ({ product }) => {
    const { id, title, price, image } = product;

    return (
        <div className="cart-item">
            <img src={image} alt={title} className="cart-item-image" />
            <div className="cart-item-details">
                <h3>{title}</h3>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default CartItem;