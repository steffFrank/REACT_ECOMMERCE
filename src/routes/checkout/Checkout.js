import { CartDropdownContext } from "../../contexts/cart-dropdown";
import { useContext } from "react";
import "./Checkout.scss";


export const Checkout = () => {
    const {setCartDropdownItems, updateCart, totalPrice, cartDropdownItems} = useContext(CartDropdownContext);
    

    const updateQuantity = (item, mode) => {
        updateCart(item, mode);
    }

    const removeItem = (id) => {
        setCartDropdownItems(prevState => {
            const newCartItems = prevState.filter(item => item.id !== id);
            return newCartItems;
        })
    }

    
    return (
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
                                    <span className="arrow" onClick={() => updateQuantity(item, "decrease")}>&lt; </span>
                                    <span>{qty}</span>
                                    <span className="arrow" onClick={() => updateQuantity(item, "increase")}> &gt;</span>
                                </div>
                            </td>
                            <td>{price}</td>
                            <td><span onClick={() => removeItem(id)} className="remove">x</span></td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <td colSpan={5}>Total: {totalPrice}</td>
            </tfoot>
        </table>
    )
}