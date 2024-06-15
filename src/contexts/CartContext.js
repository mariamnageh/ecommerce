import React, { createContext, useState } from 'react';

// Create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    // Cart state
    const [cart, setCart] = useState([]);

    // Function to add item to cart
    const addToCart = (item) => {
        setCart([...cart, item]);
        console.log(`Item ${item.id} added to the cart`);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
