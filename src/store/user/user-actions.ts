import * as a from "../constants";

export type UserActions = GetUserAndTvShow

export type GetUserAndTvShow = {
  type: typeof a.GET_USER_DETAILS_AND_SHOW,
  payload: {
    username:string;
    countryCode:string
  }
}

export const getUserAndTvShow = (username :string, countryCode :string): GetUserAndTvShow => ({
  type: a.GET_USER_DETAILS_AND_SHOW,
  payload: { username, countryCode },
});
