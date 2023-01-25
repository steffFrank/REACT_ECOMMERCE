import { useDispatch, useSelector } from "react-redux";
import { addProductToCartAction } from "../../store/cart-dropdown/cart-dropdown.action";
import { selectNewCartItems } from "../../store/cart-dropdown/cart-dropdown.selector";
import { Button } from "../Button/Button";
import "./ProductCard.scss";


export const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectNewCartItems);
    const addProductToCart = (product) => {
        dispatch(addProductToCartAction(cartItems, product));
    }
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="card-footer">
                <span className="card-footer__name">{name}</span>
                <span className="card-footer__price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={() => addProductToCart(product)}>Add to Card</Button>
        </div>
    )
}