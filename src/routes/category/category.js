import "./category.scss";
import { useEffect, useState } from "react";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";


export const Category = () => {
    const { category } = useParams();
    const categories = useSelector(selectCategories);
    const [products, setProducts] = useState(categories[category]);

    useEffect(() => {
        setProducts(categories[category]);
    },[category, categories]);

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