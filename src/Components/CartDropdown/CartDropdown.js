import "./CartDropdown.scss";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartDropdownOpen } from "../../store/cart-dropdown/cart-dropdown.action";
import { selectIsCartDropdownOpen, selectNewCartItems } from "../../store/cart-dropdown/cart-dropdown.selector";

export const CartDropdown = () => {

    const cartDropdownItems  = useSelector(selectNewCartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isOpenCartDropdown = useSelector(selectIsCartDropdownOpen);

    const goToCheckoutHandler = () => {
        dispatch(setIsCartDropdownOpen(isOpenCartDropdown));
        navigate("/checkout");
    }

    return (
        <div className="cart-dropdown-container">
            {cartDropdownItems.length > 0 ? 
            <div className="cart-items">
                {cartDropdownItems.map(item => {
                    return (
                        <article key={item.id} className="item">
                            <img src={item.imageUrl} alt={item.name}/>
                            <div className="item__title">
                                <h4>{item.name}</h4>
                                <span>{item.qty} x ${item.price}</span>
                            </div>
                        </article>
                    )
                })}
            </div> : <p className="empty-message">Your cart is empty</p>}
            <Button onClick={goToCheckoutHandler} buttonType="inverted">Go to checkout</Button>
        </div>
    )
}