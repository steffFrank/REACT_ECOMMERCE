import { CartDropdownContext } from "../../contexts/cart-dropdown";
import { useContext } from "react";
import "./Checkout.scss";


export const Checkout = () => {
    const {removeItem, updateCartQuantity, cartTotalPrice, cartDropdownItems} = useContext(CartDropdownContext);

    return (
       <section className="checkout">
       { cartDropdownItems.length > 0 ? 
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {cartDropdownItems.map(item => {
                    const { id, name, price, imageUrl, qty } = item;
                    return (
                        <tr key={id}>
                            <td><img src={imageUrl} alt={name} /></td>
                            <td>{name}</td>
                            <td>
                                <div>
                                    <span className="arrow" onClick={() => updateCartQuantity(item, "decrease")}>&#10094;</span>
                                    <span className="value">{qty}</span>
                                    <span className="arrow" onClick={() => updateCartQuantity(item, "increase")}>&#10095;</span>
                                </div>
                            </td>
                            <td>{price}</td>
                            <td><span onClick={() => removeItem(item)} className="remove">&#x292C;</span></td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>    
                    <td colSpan={5}>Total : ${cartTotalPrice}</td>
                </tr>
            </tfoot>
        </table> : <p className="empty-message">Your cart is empty</p>
        }
       </section>
    )
}