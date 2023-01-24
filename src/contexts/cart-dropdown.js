import { createContext, useReducer } from "react";


export const CartDropdownContext = createContext({
    cartDropdownItems: [],
    isCartDropdownOpen: false,
    setIsCartDropdownOpen: () => {},
    cartCount: 0,
    addProductToCart: () => {},
    cartTotalPrice: 0,
    removeItem: () => {}
});

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    IS_CART_DROPDOWN_OPEN: "IS_CART_DROPDOWN_OPEN"
}

const helperRemoveItem = (products, product) => {
    const newCartItems = products.filter(item => item.id !== product.id);
    return newCartItems
}

const addProduct = (cartItems, product) => {
    const existingProduct = cartItems.find(item => product.id === item.id);
    if (existingProduct) {
        return cartItems.map(item => 
            item.id === product.id ? {...item, qty: item.qty + 1} :  item
        )
    }
    return [...cartItems, {...product, qty: 1}];
}

const removeProduct = (cartItems, product) => {
    const existingProduct = cartItems.find(item => product.id === item.id);

    if (existingProduct.qty === 1) {
        return cartItems.filter(item => item.id !== existingProduct.id);
    }
    if (existingProduct) {
        return cartItems.map(item => 
            item.id === product.id ? {...item, qty: item.qty - 1} :  item
        )
    }
}

const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case CART_ACTION_TYPES.IS_CART_DROPDOWN_OPEN:
            return {
                ...state,
                isCartDropdownOpen: !payload
            };
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        default:
            throw new Error(`Unhandled action type ${type} in cartReducer`);
    }
}

const INITIAL_STATE = {
    isCartDropdownOpen: false,
    cartDropdownItems: [],
    cartCount:0,
    cartTotalPrice: 0
}

export const CartDropdownProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const { isCartDropdownOpen, cartDropdownItems, cartCount, cartTotalPrice } = state;

    const setIsCartDropdownOpen = () => {
        dispatch({type:CART_ACTION_TYPES.IS_CART_DROPDOWN_OPEN, payload:isCartDropdownOpen});
    }

    const updateCartItemsReducer = (cartItems) => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.qty, 0);

        const newTotal = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.qty), 0);

        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS, 
            payload: {
                cartDropdownItems:cartItems,
                cartCount: newCartCount, 
                cartTotalPrice: newTotal
            }
        });
    }
   
    const addProductToCart = (product) => {
        const newCartItems = addProduct(cartDropdownItems, product);
        updateCartItemsReducer(newCartItems);
    }

    const removeProductFromCart = (product) => {
        const newCartItems = removeProduct(cartDropdownItems, product);
        updateCartItemsReducer(newCartItems);
    }

    const removeItem = (product) => {
        const newCartItems = helperRemoveItem(cartDropdownItems, product);
        updateCartItemsReducer(newCartItems);
    }

    const value = {
        cartDropdownItems,
        isCartDropdownOpen,
        setIsCartDropdownOpen,
        addProductToCart,
        removeProductFromCart,
        cartCount,
        cartTotalPrice,
        removeItem
    };

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}