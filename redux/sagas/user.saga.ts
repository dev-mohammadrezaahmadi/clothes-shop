import { takeLatest, put, all, call } from "redux-saga/effects";
import {
	googleSignInStart,
	googleSignInSuccess,
	googleSignInFailure,
} from "../slices/user.reducer";
import {
	auth,
	googleProvider,
	createUserProfileDocument,
} from "../../firebase/firebase.utils";

export function* signInWithGoogle(): any {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		const userRef = yield call(createUserProfileDocument, user);
		const userSnapshot = yield userRef.get();
		yield put(
			googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
		);
	} catch (error) {
		yield put(googleSignInFailure(error));
	}
}
export function* onGoogleSignInStart() {
	yield takeLatest(googleSignInStart.type, signInWithGoogle);
}

export function* userSagas() {
	yield all([call(onGoogleSignInStart)]);
}
