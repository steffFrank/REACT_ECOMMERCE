import { createContext, useState } from "react";


export const CartDropdownContext = createContext({
    cartDropdownItems: [],
    isCartDropdownOpen: false,
    setIsCartDropdownOpen: () => {},
    setCartDropdownItems: () => {},
    cartCount: 0
});


export const CartDropdownProvider = ({children}) => {
    const [cartDropdownItems, setCartDropdownItems] = useState([]);
    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const value = {cartDropdownItems, setCartDropdownItems, isCartDropdownOpen, setIsCartDropdownOpen, cartCount, setCartCount};

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}