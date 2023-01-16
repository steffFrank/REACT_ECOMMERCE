import "./CategoriesPreview.scss";
import { useContext } from "react";
import { categoriesContext } from "../../contexts/products";
import { Link } from "react-router-dom";
import { ProductCard } from "../ProductCard/ProductCard";

export const CategoriesPreview = () => {

    const { categoriesMap } = useContext(categoriesContext);

    return (
        <section className="shop-container">
            {Object.keys(categoriesMap).map(title => {
                return (
                <div key={title}> 
                    <Link to={title}><h2>{title}</h2></Link>
                    <main  className="category-container" key={title}>
                        {categoriesMap[title].slice(0, 4).map(product => {
                            const newProduct = {...product, qty: 1}
                            return <ProductCard key={product.id} product={newProduct}/>
                        })}
                    </main>
                </div>
                )
            })}
        </section>
    )
}