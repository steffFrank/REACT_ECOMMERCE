import { createSelector } from "reselect";

const selectCartReducer = state => state.cartDropdownItems;

export const selectNewCartItems = createSelector([selectCartReducer], cartDropdownItems => cartDropdownItems.cartDropdownItems);

export const selectIsCartDropdownOpen = createSelector([selectCartReducer],cartDropdownItems => cartDropdownItems.isCartDropdownOpen);

export const selectNewCartCount = createSelector([selectCartReducer],cartDropdownItems => cartDropdownItems.cartDropdownItems.reduce((total, cartItem) => total + cartItem.qty,  0));

export const selectNewCartTotal = createSelector([selectCartReducer], cartDropdownItems => cartDropdownItems.cartDropdownItems.reduce((total, cartItem) => total + (cartItem.qty * cartItem.price), 0));

