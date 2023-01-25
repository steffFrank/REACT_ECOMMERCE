import { createAction } from "../../utils/reducer/reducer.utils";
import { CARTDROPDOWN_ACTION_TYPES } from "./cart-dropdown.types";
import { addProduct, removeProduct, helperRemoveItem } from "../../utils/reducer/reducer.utils";

export const setIsCartDropdownOpen = isCartDropdownOpen => createAction(CARTDROPDOWN_ACTION_TYPES.SET_IS_CART_DROPDOWN_OPEN, isCartDropdownOpen);

export const addProductToCartAction = (cartDropdownItems, product) => {
    const newCartItems = addProduct(cartDropdownItems, product);
    return createAction(CARTDROPDOWN_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeProductFromCartAction = (cartDropdownItems, product) => {
    const newCartItems = removeProduct(cartDropdownItems, product);
    return createAction(CARTDROPDOWN_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemAction = (cartDropdownItems, product) => {
    const newCartItems = helperRemoveItem(cartDropdownItems, product);
    return createAction(CARTDROPDOWN_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

