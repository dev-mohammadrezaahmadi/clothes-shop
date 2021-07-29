import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./slices/user.reducer";
import rootSaga from "./sagas/rootSaga";
import cartReducer from "./slices/cart.reducer";
import directoryReducer from "./slices/directory.reducer";
import shopReducer from "./slices/shop.reducer";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});

export const store = configureStore({
	reducer,
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
