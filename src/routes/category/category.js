import "./category.scss";
import { categoriesContext } from "../../contexts/products";
import { useContext, useEffect, useState } from "react";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";


export const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(categoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    },[category, categoriesMap]);

    return (
        <>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <main className="categories-preview">
                {products && products.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </main>
        </>
    )
}