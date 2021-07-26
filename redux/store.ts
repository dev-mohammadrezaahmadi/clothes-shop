import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.reducer";
// import { createStore } from "redux";
// // import logger from "redux-logger";

// import rootReducer from "./root-reducer";

// // const middlewares = [logger];

// const store = createStore(rootReducer);

// export default store;

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
