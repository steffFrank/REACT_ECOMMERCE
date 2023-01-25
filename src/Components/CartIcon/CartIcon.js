import "./CartIcon.scss";
import { ReactComponent as ShoppingCart } from "../../assets/images/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartDropdownOpen } from "../../store/cart-dropdown/cart-dropdown.action";
import { selectIsCartDropdownOpen, selectNewCartCount } from "../../store/cart-dropdown/cart-dropdown.selector";

export const CartIcon = () => {
    const cartCount = useSelector(selectNewCartCount);
    const isCartDropdownOpen = useSelector(selectIsCartDropdownOpen);
    const dispatch = useDispatch()
    const toggleCartDropdown = () => {
        dispatch(setIsCartDropdownOpen(isCartDropdownOpen));
    }

    return (
        <div className="cart-icon-container" onClick={toggleCartDropdown}>
            <ShoppingCart className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}