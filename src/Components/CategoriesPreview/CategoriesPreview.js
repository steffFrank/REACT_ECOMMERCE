import "./CategoriesPreview.scss";
import { Link } from "react-router-dom";
import { ProductCard } from "../ProductCard/ProductCard";
import { selectCategories } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";
export const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategories);
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