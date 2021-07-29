import firebase from "firebase";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
interface currentUserType extends firebase.firestore.DocumentData {
	id: string;
}

interface userStateType {
	currentUser: currentUserType | null;
	error: string | null;
}

const initialState: userStateType = {
	currentUser: null,
	error: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setCurrentUser: (state, action: PayloadAction<currentUserType | null>) => {
			state.currentUser = action.payload;
		},
		googleSignInStart: () => {},
		emailSignInStart: (state, action) => {},

		// Sign out reducer
		signOutStart: () => {},
		signOutSuccess: (state) => {
			state.currentUser = null;
			state.error = null;
		},
		signOutFailure: (state, action) => {
			state.error = action.payload;
		},
		// Sign up reducer
		signUpStart: (state, action) => {},
		signUpSuccess: (state, action) => {},
		signUpFailure: (state, action) => {
			state.error = action.payload;
		},
		// Sign in reducer
		signInSuccess: (state, action) => {
			state.currentUser = action.payload;
			state.error = null;
		},
		signInFailure: (state, action) => {
			state.error = action.payload;
		},

		checkUserSession: () => {},
	},
});

export const {
	setCurrentUser,
	googleSignInStart,
	emailSignInStart,
	signInSuccess,
	signInFailure,
	checkUserSession,
	signOutStart,
	signOutSuccess,
	signOutFailure,
	signUpStart,
	signUpSuccess,
	signUpFailure,
} = userSlice.actions;
export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export default userSlice.reducer;
