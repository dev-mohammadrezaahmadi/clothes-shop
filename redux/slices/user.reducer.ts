import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { SnapshotFromUserType } from "../sagas/user.saga";
export interface currentUserType {
	id: string;
	createdAt: any;
	displayName: string;
	email: string;
}

export interface SignInWithEmailActionPayloadType {
	email: string;
	password: string;
}

export interface SignUpActionPayloadType
	extends SignInWithEmailActionPayloadType {
	displayName: string;
}

export interface userStateType {
	currentUser: currentUserType | null;
	error: string | null;
}

export const initialState: userStateType = {
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
		emailSignInStart: (
			_,
			action: PayloadAction<SignInWithEmailActionPayloadType>
		) => {},

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
		signUpStart: (_, action: PayloadAction<SignUpActionPayloadType>) => {},
		signUpSuccess: (_, action: PayloadAction<SnapshotFromUserType>) => {},
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
