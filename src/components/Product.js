import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import './Product.css';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    // Destructure product
    const { id, image, category, title, price } = product;

    return (
        <div className='product-card'>
            <div className="product-image-container">
                <Link to={`/product/${id}`}>
                    <img
                        className="product-image"
                        src={image}
                        alt={title} // Use title or a suitable alt text
                    />
                </Link>
            </div>
            <div className="product-info">
                {/* Product buttons */}
                <div className="product-buttons">
                    <button onClick={() => addToCart(product)} className="product-button">
                        <BsPlus className="text-xl text-white" /> {/* Adjusted icon size */}
                    </button>
                    <Link to={`/product/${id}`} className="product-button">
                        <BsEyeFill className="text-xl text-primary" /> {/* Adjusted icon size */}
                    </Link>
                </div>
                {/* Product details */}
                <div className="product-category">{category}</div> {/* Added category */}
                <Link to={`/product/${id}`} className='product-title'>
                    <h3 className='font-semibold mb-1 text-sm'>{title}</h3> {/* Adjusted font size */}
                </Link>
                <div className="product-price">${price}</div>
            </div>
        </div>
    );
};

export default Product;
