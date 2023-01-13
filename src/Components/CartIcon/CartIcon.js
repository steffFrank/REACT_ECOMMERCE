import "./CartIcon.scss";
import { ReactComponent as ShoppingCart } from "../../assets/images/shopping-bag.svg";
import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown";


export const CartIcon = () => {
    const { setIsCartDropdownOpen } = useContext(CartDropdownContext);

    const handleCartClick = () => {
        setIsCartDropdownOpen(prevState => !prevState);
    }

    return (
        <div className="cart-icon-container" onClick={handleCartClick}>
            <ShoppingCart className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}