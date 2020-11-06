import * as a from "../constants";
import { UserActions } from "./user-actions";

type State = {
  username: string | null;
  name: string;
  location: string;
  publicRepos: number;
  profilePic: string;
};

type Actions =
  | UserActions
  | {
      type: typeof a.GET_USER_DETAILS_AND_SHOW;
    }
  | {
      type: typeof a.SET_GITHUB_USER;
      payload: { data: State };
    };

const DEFAULT_STATE: State = {
  username: "",
  name: "",
  location: "",
  publicRepos: 0,
  profilePic: "",
};

export default function userReducer(
  state: State = DEFAULT_STATE,
  action: Actions
): State {
  switch (action.type) {
    case a.GET_USER_DETAILS_AND_SHOW:
      return {
        ...state,
        username: null,
      };
    case a.SET_GITHUB_USER:
      return action.payload.data;
    default:
      return state;
  }
}
