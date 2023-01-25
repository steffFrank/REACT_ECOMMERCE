import "./Checkout.scss";
import { addProductToCartAction, removeProductFromCartAction, removeItemAction  } from "../../store/cart-dropdown/cart-dropdown.action";
import { useDispatch, useSelector } from "react-redux";
import { selectNewCartItems, selectNewCartTotal } from "../../store/cart-dropdown/cart-dropdown.selector";

export const Checkout = () => {
    const dispatch = useDispatch();
    const cartDropdownItems = useSelector(selectNewCartItems);
    const cartTotalPrice = useSelector(selectNewCartTotal);

    const removeItem = product => dispatch(removeItemAction(cartDropdownItems, product));
    const removeProductFromCart = product => dispatch(removeProductFromCartAction(cartDropdownItems, product));
    const addProductToCart = product => dispatch(addProductToCartAction(cartDropdownItems, product));

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
                                    <span className="arrow" onClick={() => removeProductFromCart(item)}>&#10094;</span>
                                    <span className="value">{qty}</span>
                                    <span className="arrow" onClick={() => addProductToCart(item)}>&#10095;</span>
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