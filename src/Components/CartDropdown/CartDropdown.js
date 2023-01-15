import "./CartDropdown.scss";
import { Button } from "../Button/Button";
import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown";
import { useNavigate } from "react-router-dom";

export const CartDropdown = () => {

    const { cartDropdownItems } = useContext(CartDropdownContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
    }

    return (
        <div className="cart-dropdown-container">
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
            </div>
            <Button onClick={goToCheckoutHandler} buttonType="inverted">Go to checkout</Button>
        </div>
    )
}