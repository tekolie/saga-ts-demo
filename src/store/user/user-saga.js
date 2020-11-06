import { call, takeLatest, put, delay } from "redux-saga/effects";

import * as api from "../../api";
import * as a from "../constants";

export function* init() {
  yield takeLatest(a.GET_USER_DETAILS_AND_SHOW, handleGetHubUser);
}

function* handleGetHubUser({ payload }) {
  const { data } = yield call(api.getGitHubUser, payload.username);

  if (data) {
    yield delay(1000);

    yield put({
      type: a.SET_GITHUB_USER,
      payload: {
        data: {
          username: data.login,
          name: data.name,
          location: data.location,
          publicRepos: data["public_repos"],
          profilePic: data["avatar_url"],
        },
      },
    });
  }
}
