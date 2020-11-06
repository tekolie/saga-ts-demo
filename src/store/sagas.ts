import { all } from "redux-saga/effects";

import * as userSaga from "./user/user-saga";
import * as newsSaga from "./news/news-saga";
import * as tvShowsSaga from "./tv-shows/tv-shows-sagas";

export default function* rootSaga() {
  yield all([userSaga.init(), newsSaga.init(), tvShowsSaga.init()]);
}
