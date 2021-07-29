import { all, call } from "redux-saga/effects";

import { userSagas } from "../sagas/user.saga";
import { cartSagas } from "../sagas/cart.saga";

export default function* rootSaga() {
	yield all([call(userSagas), call(cartSagas)]);
}
