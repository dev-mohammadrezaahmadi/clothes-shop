import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.reducer";
import cartReducer from "./slices/cart.reducer";

export const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
