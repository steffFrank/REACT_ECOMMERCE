import { useContext } from "react";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { ProductsContext } from "../../contexts/products";
import "./shop.scss";

export const Shop = () => {

    const { products } = useContext(ProductsContext);

    return (
        <div className="shop-container">
            {products.map(product => {
                return <ProductCard key={product.id} product={product}/>
            })}
        </div>
    )
}