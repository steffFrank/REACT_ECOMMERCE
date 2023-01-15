import "./CartDropdown.scss";
import { Button } from "../Button/Button";
import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown";

export const CartDropdown = () => {

    const { cartDropdownItems } = useContext(CartDropdownContext);
    console.log(cartDropdownItems);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartDropdownItems.map(item => {
                    return <h3 key={item.id}>{item.id} {item.name} {item.qty}</h3>
                })   }
            </div>
            <Button>Go to checkout</Button>
        </div>
    )
}