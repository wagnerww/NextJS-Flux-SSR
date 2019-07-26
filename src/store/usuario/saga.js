import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { userSuccess } from "./actions";

export function* userRequest() {
  try {
    const { data } = yield call(api.get, "/users/wagnerww");

    yield put(userSuccess(data));
  } catch (error) {
    console.log("error", error);
  }
}
