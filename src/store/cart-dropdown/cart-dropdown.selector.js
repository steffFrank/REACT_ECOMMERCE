import { createSelector } from "reselect";

export const selectIsCartDropdownOpen = state => state.cartDropdownItems.isCartDropdownOpen;

export const selectNewCartCount = state => state.cartDropdownItems.cartDropdownItems.reduce((total, cartItem) => total + cartItem.qty,  0);

export const selectNewCartTotal = state => state.cartDropdownItems.cartDropdownItems.reduce((total, cartItem) => total + (cartItem.qty * cartItem.price), 0);

export const selectNewCartItems = state => state.cartDropdownItems.cartDropdownItems;