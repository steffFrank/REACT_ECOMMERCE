import "./CartIcon.scss";
import { ReactComponent as ShoppingCart } from "../../assets/images/shopping-bag.svg";


export const CartIcon = () => {
    return (
        <div className="cart-icon-container">
            <ShoppingCart className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}