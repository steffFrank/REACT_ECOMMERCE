import { useContext } from "react";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { categoriesContext } from "../../contexts/products";
import "./shop.scss";
import { useNavigate } from "react-router-dom";

export const Shop = () => {

    const { categoriesMap } = useContext(categoriesContext);
    const navigate = useNavigate();

    const goToProductPage = (title) => {
        navigate(title);
    }

    return (
        <section className="shop-container">
            {Object.keys(categoriesMap).map(title => {
                return (
                <div key={title}> 
                    <h2 onClick={() => goToProductPage(title)}>{title}</h2>
                    <div  className="category-container" key={title}>
                        {categoriesMap[title].slice(0, 4).map(product => {
                            const newProduct = {...product, qty: 1}
                            return <ProductCard key={product.id} product={newProduct}/>
                        })}
                    </div>
                </div>
                )
            })}
        </section>
    )
}