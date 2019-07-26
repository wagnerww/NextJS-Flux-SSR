import { all, takeLatest } from "redux-saga/effects";

import { Types as TypesUser } from "./usuario/actions";
import { userRequest } from "./usuario/saga";

export default function* rootSagas() {
  yield all([takeLatest(TypesUser.userRequest, userRequest)]);
}
