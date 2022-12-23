import "./Categories.scss";
import { Category } from "../Category/Category";

export const Categories = ({categories}) => {

    const categoriesList = categories.map(category => {
        return <Category key={category.id} category={category} />
    })
    return (
        <div className="category-container">
            {categoriesList}
        </div>
    );
}