import { takeLatest, put, all, call } from "redux-saga/effects";
import {
	googleSignInStart,
	emailSignInStart,
	signInSuccess,
	signInFailure,
} from "../slices/user.reducer";
import {
	auth,
	googleProvider,
	createUserProfileDocument,
} from "../../firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth: any): any {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth);
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

export function* signInWithEmail({
	payload: { email, password },
}: {
	payload: { email: string; password: string };
}): any {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		put(signInFailure(error));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(googleSignInStart, signInWithGoogle);
}

export function* onEmailSignInStart() {
	yield takeLatest(emailSignInStart, signInWithEmail);
}

export function* userSagas() {
	yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
