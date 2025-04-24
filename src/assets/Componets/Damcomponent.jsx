import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Products from "./Products"; // Import the component you want to show

export const ProductsData = createContext();

function Damcomponents() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let { data } = await axios.get('https://fakestoreapi.com/products');
            setProducts(data);
        }
        fetchData();
    }, []);

    return (
        <ProductsData.Provider value={products}>
            <Products />
        </ProductsData.Provider>
    );
}

export default Damcomponents;
