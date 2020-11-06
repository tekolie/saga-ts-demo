import { call, takeLatest, put, delay } from "redux-saga/effects";

import * as api from "../../api";
import * as a from "../constants";
import { GetUserAndTvShow } from "../actions";

export function* init() {
  yield takeLatest(a.GET_USER_DETAILS_AND_SHOW, handleGetNews);
}

function* handleGetNews(action: GetUserAndTvShow) {
  const { countryCode } = action.payload;
  const { data }: { data: api.NewsByCountryCode } = yield call(
    api.getNewsByCountryCode,
    countryCode
  );

  if (data) {
    yield delay(1000);

    const result = data.articles.map((article) => ({
      source: article.source.name,
      author: article.author,
      title: article.title,
      featuredImg: article.urlToImage,
      newsLink: article.url,
    }));

    yield put({
      type: a.SET_NEWS,
      payload: { data: result.splice(0, 4) },
    });
  }
}
