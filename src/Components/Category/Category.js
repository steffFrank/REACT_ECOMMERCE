import "./Category.scss";
import { useNavigate } from "react-router-dom";


export const Category = ({category}) => {
    const navigate = useNavigate();
    const onRouteHandler = () => {
        navigate(category.route);
    }
    return (
        <div onClick={onRouteHandler} className="category" >
            <div className="background-image" 
                style={{backgroundImage: `url(${category.imageUrl})`}}>
            </div>
            <div className="category__title">
                <h2>{category.title.toUpperCase()}</h2>
                <p>SHOP NOW</p>
            </div>
        </div>
    )
}

