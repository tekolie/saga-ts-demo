import { combineReducers } from "redux";

import user from "./user/user-reducers";
import news from "./news/news-reducers";
import tvShows from "./tv-shows/tv-shows-reducers";

export default combineReducers({ user, news, tvShows });
