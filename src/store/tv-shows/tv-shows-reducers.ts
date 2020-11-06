import { combineReducers } from "redux";
import * as a from "../constants";

export type TvShow = {
  title: string;
  id: string;
  posterImg: string;
};

type TvShowActions =
  | {
      type: typeof a.GET_USER_DETAILS_AND_SHOW;
    }
  | { type: typeof a.SET_TV_SHOWS; payload: { data: TvShow[] } };

const isLoading = (state = false, action: TvShowActions) => {
  switch (action.type) {
    case a.GET_USER_DETAILS_AND_SHOW:
      return true;
    case a.SET_TV_SHOWS:
      return false;
    default:
      return state;
  }
};

const list = (state: TvShow[] = [], action: TvShowActions) => {
  switch (action.type) {
    case a.GET_USER_DETAILS_AND_SHOW:
      return [];
    case a.SET_TV_SHOWS:
      return action.payload.data;
    default:
      return state;
  }
};

export default combineReducers({ isLoading, list });
