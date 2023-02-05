import "./Categories.scss";
import { Category } from "../Category/Category";


export const Categories = ({categories}) => {
    
    const categoriesList = categories.map(category => {
        return <Category key={category.id} category={category} />
    })
    return (
        <main className="category-container">
            {categoriesList}
        </main>
    );
}