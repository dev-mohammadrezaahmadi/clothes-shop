import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.reducer";
import cartReducer from "./slices/cart.reducer";
import directoryReducer from "./slices/directory.reducer";
import shopReducer from "./slices/shop.reducer";

export const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartReducer,
		directory: directoryReducer,
		shop: shopReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
