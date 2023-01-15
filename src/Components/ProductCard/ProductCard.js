import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown";
import { Button } from "../Button/Button";
import "./ProductCard.scss";


export const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const { updateCart } = useContext(CartDropdownContext);

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="card-footer">
                <span className="card-footer__name">{name}</span>
                <span className="card-footer__price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={() => updateCart(product, "increase")}>Add to Card</Button>
        </div>
    )
}