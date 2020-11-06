import { combineReducers } from "redux";
import * as a from "../constants";

export type Article = {
  source: string;
  author: string;
  title: string;
  featuredImg: string;
  newsLink: string;
};

type NewsActions =
  | {
      type: typeof a.GET_USER_DETAILS_AND_SHOW;
    }
  | { type: typeof a.SET_NEWS; payload: { data: Article[]} }
  | {
      type: typeof a.GET_USER_DETAILS_AND_SHOW;
    };

const isLoading = (state = false, action: NewsActions): boolean => {
  switch (action.type) {
    case a.GET_USER_DETAILS_AND_SHOW:
      return true;
    case a.SET_NEWS:
      return false;
    default:
      return state;
  }
};

const articles = (state: Article[] = [], action: NewsActions) => {
  switch (action.type) {
    case a.GET_USER_DETAILS_AND_SHOW:
      return [];
    case a.SET_NEWS:
      return action.payload.data;
    default:
      return state;
  }
};

export default combineReducers({ isLoading, articles });
