import "./Category.scss";


export const Category = ({category}) => {
    return (
        <div className="category" >
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

