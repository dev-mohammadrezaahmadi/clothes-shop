import firebase from "firebase";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
interface currentUserType extends firebase.firestore.DocumentData {
	id: string;
}

interface userStateType {
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
