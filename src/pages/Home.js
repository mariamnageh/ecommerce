import React, { useContext, useState, useEffect } from 'react'; 
import Product from "../components/Product";
import '../styles.css';
import { ProductContext } from '../contexts/ProductContext';

const Home = () => {
    const { products } = useContext(ProductContext);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        setFilteredProducts(products); 
    }, [products]); 

    const filterProducts = (category) => {
        setSelectedCategory(category);
        if (category === '') {
            setFilteredProducts(products); 
        } else {
            const filtered = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className="home-container">
            <div className="category-buttons">
                <button
                    className={`category-button ${selectedCategory === "women's clothing" ? 'active' : ''}`}
                    onClick={() => filterProducts("women's clothing")}
                >
                    Women's Clothing
                </button>
                <button
                    className={`category-button ${selectedCategory === "men's clothing" ? 'active' : ''}`}
                    onClick={() => filterProducts("men's clothing")}
                >
                    Men's Clothing
                </button>
                <button
                    className={`category-button ${selectedCategory === '' ? 'active' : ''}`}
                    onClick={() => filterProducts('')}
                >
                    All Products
                </button>
            </div>
            <div className="product-container">
                {filteredProducts.length === 0 ? (
                    <p>No products found.</p>
                ) : (
                    filteredProducts.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Home;
