import { all, call } from "redux-saga/effects";

import { userSagas } from "../sagas/user.saga";

export default function* rootSaga() {
	yield all([call(userSagas)]);
}
