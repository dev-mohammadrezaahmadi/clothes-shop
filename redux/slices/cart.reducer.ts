import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { CollectionDataItemsType } from "../../data/shop.data";

const addItemToCart = (
	cartItems: CollectionDataItemsType[],
	cartItemToAdd: CollectionDataItemsType
) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? {
						...cartItem,
						quantity:
							typeof cartItem.quantity === "number" && cartItem.quantity + 1,
				  }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeItemFromCart = (
	cartItems: CollectionDataItemsType[],
	cartItemToRemove: CollectionDataItemsType
) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	if (existingCartItem?.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? {
					...cartItem,
					quantity:
						typeof cartItem.quantity === "number" && cartItem.quantity - 1,
			  }
			: cartItem
	);
};

interface cartStateType {
	hidden: boolean;
	cartItems: any[];
}

const initialState: cartStateType = {
	hidden: true,
	cartItems: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		toggleCartHidden: (state) => {
			state.hidden = !state.hidden;
		},
		addItem: (state, action) => {
			state.cartItems = addItemToCart(state.cartItems, action.payload);
		},
		removeItem: (state, action) => {
			state.cartItems = removeItemFromCart(state.cartItems, action.payload);
		},
		clearItemFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(cartItem) => cartItem.id !== action.payload.id
			);
		},
	},
});

export const { toggleCartHidden, addItem, removeItem, clearItemFromCart } =
	cartSlice.actions;
export const selectCartHidden = (state: RootState) => state.cart.hidden;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectCartItemsCount = (state: RootState) =>
	state.cart.cartItems.reduce(
		(accQuantity, cartItem) => accQuantity + cartItem.quantity,
		0
	);
export const selectCartItemsPriceTotal = (state: RootState) =>
	state.cart.cartItems.reduce(
		(accQuantity, cartItem) => accQuantity + cartItem.quantity * cartItem.price,
		0
	);
export default cartSlice.reducer;
