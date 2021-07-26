import firebase from "firebase";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// import { UserActionTypes } from "./user.types";

// const INITIAL_STATE = {
// 	currentUser: null,
// };

// const userReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionTypes.SET_CURRENT_USER:
// 			return {
// 				...state,
// 				currentUser: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export default userReducer;

export interface currentUserType extends firebase.firestore.DocumentData {
	id: string;
}

export interface userStateType {
	currentUser: currentUserType | null;
}

const initialState: userStateType = {
	currentUser: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setCurrentUser: (state, action: PayloadAction<currentUserType | null>) => {
			state.currentUser = action.payload;
		},
	},
});

export const { setCurrentUser } = userSlice.actions;
export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export default userSlice.reducer;
