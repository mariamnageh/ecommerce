import React, { children , createContext, useEffect, useState} from "react";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    // Products State
    const [products, setProducts] = useState([]);

    //Fetch Products 
    useEffect(() => {
        const FetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        };

        FetchProducts();
    },    []);

    return <ProductContext.Provider value={{ products }}>
        {children}
    </ProductContext.Provider>;
};

export default  ProductProvider;