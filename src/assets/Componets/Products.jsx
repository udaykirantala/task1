import { useContext } from "react";
import { ProductsData } from "../Componets/Damcomponent";
import '../Componets/Dam.css'

function Products() {
    const products = useContext(ProductsData);
    return (
        <section className="productsSection">
            {products.map(product => (
                <div key={product.id} className="productsCarts">
                    <img src={product.image} alt={product.title} width="150" />
                    <h3>{product.title}</h3>
                    <p>{product.price} USD</p>
                </div>
            ))}
        </section>
    );
}

export default Products;
