import React, { useContext } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";
import './styles.css';
const Home = () => {
    // Get products from product context
    const { products } = useContext(ProductContext);

    // Get only men's & women's clothing category
    const filteredProducts = products.filter(
        (item) =>
            item.category === "men's clothing" ||
            item.category === "women's clothing"
    );

    return (
        <div className="product-container">
            {filteredProducts.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Home;
