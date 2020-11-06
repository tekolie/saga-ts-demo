import { call, takeLatest, put } from "redux-saga/effects";

import * as api from "../../api";
import * as a from "../constants";
import { GetUserAndTvShow } from "../actions";
import { TvShow } from "./tv-shows-reducers";

export function* init() {
  yield takeLatest(a.GET_USER_DETAILS_AND_SHOW, handleGetTvShows);
}

function* handleGetTvShows(action: GetUserAndTvShow) {
  const { countryCode } = action.payload;
  const { data }: { data: api.TvShowsByCountry } = yield call(
    api.getTvShowsByCountry,
    countryCode
  );

  if (data) {
    const results = data.tv_episodes
      .filter((a) => !!a.tvseries_imdb_id)
      .map((a) => transformTvShows(a));

    const firstTenResults = results.splice(0, 10);
    const tvShowsWithImages: TvShow[] = [];

    for (const item of firstTenResults) {
      const { data }: { data: api.MovieImg } = yield call(
        api.getMovieImg,
        item.id!
      );

      if (data.poster) {
        tvShowsWithImages.push({
          ...item,
          id: item.id!,
          posterImg: data.poster,
        });
      }
    }

    yield put({
      type: a.SET_TV_SHOWS,
      payload: { data: tvShowsWithImages.splice(0, 8) },
    });
  }
}

const transformTvShows = (data: api.TvEpisode) => ({
  title: data.tvseries_name,
  id: data.tvseries_imdb_id,
});
