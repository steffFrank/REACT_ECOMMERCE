import "./CartIcon.scss";
import { ReactComponent as ShoppingCart } from "../../assets/images/shopping-bag.svg";
import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown";

export const CartIcon = () => {
    const { setIsCartDropdownOpen, cartCount } = useContext(CartDropdownContext);

    const toggleCartDropdown = () => {
        setIsCartDropdownOpen(prevState => !prevState);
    }

    return (
        <div className="cart-icon-container" onClick={toggleCartDropdown}>
            <ShoppingCart className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}