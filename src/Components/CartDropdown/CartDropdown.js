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
                    return (
                        <article className="item">
                            <img src={item.imageUrl} alt={item.name}/>
                            <div className="item__title">
                                <h4>{item.name}</h4>
                                <span>{item.qty} x ${item.price}</span>
                            </div>
                        </article>
                    )
                })   }
            </div>
            <Button>Go to checkout</Button>
        </div>
    )
}