import { createContext, useEffect, useReducer, useState } from "react";


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

const CART_ACTION_TYPES = {
    IS_CART_DROPDOWN_OPEN: "IS_CART_DROPDOWN_OPEN",
    REMOVE_ITEM: "REMOVE_ITEM",
    UPDATE_CART_QUANTITY: "UPDATE_CART_QUANTITY"
}


const cartReducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case CART_ACTION_TYPES.IS_CART_DROPDOWN_OPEN:
            return {
                ...state,
                isCartDropdownOpen: !payload
            };
        default:
            throw new Error(`Unhandled action type ${type} in cartReducer`);
    }
}

const INITIAL_STATE = {
    isCartDropdownOpen: false
}

export const CartDropdownProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const { isCartDropdownOpen } = state;

    const [cartDropdownItems, setCartDropdownItems] = useState([]);
    // const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);

    const setIsCartDropdownOpen = () => {
        console.log(isCartDropdownOpen);
        dispatch({type:CART_ACTION_TYPES.IS_CART_DROPDOWN_OPEN, payload:isCartDropdownOpen});
    }

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