import { createContext, useEffect, useState } from "react";


export const CartDropdownContext = createContext({
    cartDropdownItems: [],
    isCartDropdownOpen: false,
    setIsCartDropdownOpen: () => {},
    setCartDropdownItems: () => {},
    cartCount: 0,
    updateCartQuantity: () => {},
    cartTotalPrice: 0,
    removeItem: () => {}
});


export const CartDropdownProvider = ({children}) => {
    const [cartDropdownItems, setCartDropdownItems] = useState([]);
    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);

    useEffect(() => {
        const newCartCount = cartDropdownItems.reduce((total, cartDropdownItem) => total + cartDropdownItem.qty, 0);
        setCartCount(newCartCount);
        
        const newTotal = cartDropdownItems.reduce((total, item) => total + (item.price * item.qty), 0);
        setCartTotalPrice(newTotal);
    }, [cartDropdownItems])
    

    const removeItem = (product) => {
        setCartDropdownItems(prevState => {
            const newCartItems = prevState.filter(item => item.id !== product.id);
            return newCartItems;
        })
    }

    const updateCartQuantity = (product, mode) => {
        const newCart = [...cartDropdownItems];
        for (const element of newCart) {
            if (element.id === product.id) {
                if (mode === "increase") {
                    element.qty = product.qty + 1;
                }
                if (mode === "decrease") {
                    element.qty = product.qty - 1;
                    if (element.qty === 0) {
                         removeItem(element);
                         return;
                    }
                }
                setCartDropdownItems(newCart);
                return;
            }
        }
        setCartDropdownItems([...newCart, product]);
    }

    const value = {
        cartDropdownItems,
        setCartDropdownItems,
        isCartDropdownOpen,
        setIsCartDropdownOpen,
        updateCartQuantity,
        cartCount,
        cartTotalPrice,
        removeItem
    };

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}