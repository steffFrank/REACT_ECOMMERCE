import { CARTDROPDOWN_ACTION_TYPES } from "./cart-dropdown.types";

const CART_INITIAL_STATE = {
    isCartDropdownOpen: false,
    cartDropdownItems: [],
    cartCount:0,
    cartTotalPrice: 0
}

export const cartDropdownReducer = (state=CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CARTDROPDOWN_ACTION_TYPES.SET_IS_CART_DROPDOWN_OPEN: 
            return {
                ...state,
                isCartDropdownOpen: !payload
            }
        case CARTDROPDOWN_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartDropdownItems: payload
            }
        default: 
            return state; 
    }
}

