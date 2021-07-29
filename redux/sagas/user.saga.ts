import { takeLatest, put, all, call } from "redux-saga/effects";
import {
	googleSignInStart,
	emailSignInStart,
	signInSuccess,
	signInFailure,
	checkUserSession,
	signOutSuccess,
	signOutFailure,
	signOutStart,
	signUpStart,
	signUpFailure,
	signUpSuccess,
} from "../slices/user.reducer";
import {
	auth,
	googleProvider,
	createUserProfileDocument,
	getCurrentUser,
} from "../../firebase/firebase.utils";

import type {
	SignInWithEmailActionPayloadType,
	SignUpActionPayloadType,
} from "../slices/user.reducer";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SnapshotFromUserType {
	user: unknown;
	additionalData?: any;
}

export function* getSnapshotFromUserAuth(
	userAuth: unknown,
	additionalData?: any
): any {
	try {
		const userRef = yield call(
			createUserProfileDocument,
			userAuth,
			additionalData
		);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signInWithGoogle(): any {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signInWithEmail(
	action: PayloadAction<SignInWithEmailActionPayloadType>
): any {
	try {
		const { email, password } = action.payload;
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		put(signInFailure(error));
	}
}

export function* isUserAuthenticated(): any {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailure(error));
	}
}

export function* signUp(action: PayloadAction<SignUpActionPayloadType>): any {
	const { email, password, displayName } = action.payload;
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield put(signUpSuccess({ user, additionalData: { displayName } }));
	} catch (error) {
		yield put(signUpFailure(error));
	}
}

export function* signInAfterSignUp(
	action: PayloadAction<SnapshotFromUserType>
) {
	const { user, additionalData } = action.payload;
	yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onSignOutStart() {
	yield takeLatest(signOutStart, signOut);
}

export function* onCheckUserSession() {
	yield takeLatest(checkUserSession, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
	yield takeLatest(googleSignInStart, signInWithGoogle);
}

export function* onEmailSignInStart() {
	yield takeLatest(emailSignInStart, signInWithEmail);
}

export function* onSignUpStart() {
	yield takeLatest(signUpStart, signUp);
}

export function* onSignUpSuccess() {
	yield takeLatest(signUpSuccess, signInAfterSignUp);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
	]);
}
