import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import '../styles.css';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { id, image, category, title, price } = product;

    return (
        <div className='product-card'>
            <div className="product-image-container">
                <Link to={`/product/${id}`}>
                    <img
                        className="product-image"
                        src={image}
                        alt={title}
                    />
                </Link>
            </div>
            <div className="product-info">
                <h3 className='product-title'>{title}</h3>
                <p className="product-category">{category}</p>
                <p className="product-price">${price}</p>
                <div className="product-buttons">
                    <button 
                        className="product-button add-button"
                        onClick={() => addToCart(product)}
                    >
                        <BsPlus className="icon" /> Add
                    </button>
                    <Link to={`/product/${id}`} className="product-button view-button">
                        <BsEyeFill className="icon" /> View
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
