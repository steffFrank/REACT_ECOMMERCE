import "./category.scss";
import { useEffect, useState } from "react";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategories, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import { Loading } from "../../Components/Loading/Loading";


export const Category = () => {
    const { category } = useParams();
    const categories = useSelector(selectCategories);
    const [products, setProducts] = useState(categories[category]);
    const isLoading = useSelector(selectCategoriesIsLoading);

    
    useEffect(() => {
        setProducts(categories[category]);
    },[category, categories]);

    return (
        <>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            { isLoading ? <Loading /> : 
            <main className="categories-preview">
                {products && products.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </main>
            }
        </>
    )
}