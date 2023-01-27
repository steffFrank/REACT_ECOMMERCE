import "./CategoriesPreview.scss";
import { Link } from "react-router-dom";
import { ProductCard } from "../ProductCard/ProductCard";
import { selectCategories, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";
import { Loading } from "../Loading/Loading";
export const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategories);
    const isLoading = useSelector(selectCategoriesIsLoading);
    console.log(isLoading);
    
    return (
        <section className="shop-container">
           {isLoading ? <Loading /> :  (Object.keys(categoriesMap).map(title =>     {
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
                })) 
            }
        </section>
    )
}