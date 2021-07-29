import { call, all, takeLatest, put } from "redux-saga/effects";
import { signOutSuccess } from "../slices/user.reducer";
import { clearCart } from "../slices/cart.reducer";

export function* clearCartOnSignOut() {
	yield put(clearCart());
}

export function* onSignOutSuccess() {
	yield takeLatest(signOutSuccess, clearCartOnSignOut);
}

export function* cartSagas() {
	yield all([call(onSignOutSuccess)]);
}
