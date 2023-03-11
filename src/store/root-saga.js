import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./categories/categoriy.saga";
export function* rootSaga() {
    yield all([call(categoriesSaga)]);
}