import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface cartStateType {
	hidden: boolean;
}

const initialState: cartStateType = {
	hidden: true,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		toggleCartHidden: (state) => {
			state.hidden = !state.hidden;
		},
	},
});

export const { toggleCartHidden } = cartSlice.actions;
export const selectCartHidden = (state: RootState) => state.cart.hidden;
export default cartSlice.reducer;
