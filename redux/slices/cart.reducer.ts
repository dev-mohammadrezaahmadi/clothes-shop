import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { ShopDataItemsType, ShopDataType } from "../../data/shop.data";

const addItemToCart = (
	cartItems: ShopDataItemsType[],
	cartItemToAdd: ShopDataItemsType
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
	},
});

export const { toggleCartHidden, addItem } = cartSlice.actions;
export const selectCartHidden = (state: RootState) => state.cart.hidden;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectCartItemsCount = (state: RootState) =>
	state.cart.cartItems.reduce(
		(accQuantity, cartItem) => accQuantity + cartItem.quantity,
		0
	);
export default cartSlice.reducer;
