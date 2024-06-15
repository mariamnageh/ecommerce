import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
import '../styles.css'; 

const ProductDetails = () => {
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = products.find(prod => prod.id === parseInt(id));
        setProduct(foundProduct);
    }, [id, products]);

    const handleAddToCart = () => {
        if (product) {
            addToCart(product); 
            alert('Product added to cart!');
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    const { image, category, title, price, description } = product;

    return (
        <div className="product-details">
            <img src={image} alt={title} className="product-image" />
            <div className="product-info">
                <h2>{title}</h2>
                <p><strong>Category:</strong> {category}</p>
                <p><strong>Price:</strong> ${price}</p>
                <p><strong>Description:</strong> {description}</p>
                <button
                    onClick={handleAddToCart}
                    className="add-to-cart-btn" 
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;