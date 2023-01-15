import { createContext, useEffect, useState } from "react";


export const CartDropdownContext = createContext({
    cartDropdownItems: [],
    isCartDropdownOpen: false,
    setIsCartDropdownOpen: () => {},
    setCartDropdownItems: () => {},
    cartCount: 0,
    addToCart: () => {}
});


export const CartDropdownProvider = ({children}) => {
    const [cartDropdownItems, setCartDropdownItems] = useState([]);
    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartDropdownItems.reduce((total, cartDropdownItem) => total + cartDropdownItem.qty, 0);
        setCartCount(newCartCount);
    }, [cartDropdownItems])


    const addToCart = (product) => {
        setCartDropdownItems(prevState => {
            for (const element of prevState) {
                if (element.id === product.id) {
                    element.qty = product.qty + 1;
                    return [...prevState];
                }
            }
            return [...prevState, product];
        });
    }

    const value = {cartDropdownItems, setCartDropdownItems, isCartDropdownOpen, setIsCartDropdownOpen, addToCart, cartCount};

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}