import { createContext, useEffect, useState } from "react";


export const CartDropdownContext = createContext({
    cartDropdownItems: [],
    isCartDropdownOpen: false,
    setIsCartDropdownOpen: () => {},
    setCartDropdownItems: () => {},
    cartCount: 0,
});


export const CartDropdownProvider = ({children}) => {
    const [cartDropdownItems, setCartDropdownItems] = useState([]);
    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartDropdownItems.reduce((total, cartDropDwonItem) => total + cartDropDwonItem.qty, 0);
        setCartCount(newCartCount);
    }, [cartDropdownItems])

    const value = {cartDropdownItems, setCartDropdownItems, isCartDropdownOpen, setIsCartDropdownOpen, cartCount};

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}