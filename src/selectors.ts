import { AppState } from "./store";

export const getName = ({ user }: AppState) => user.name;
export const getUsername = ({ user }: AppState) => user.username;
export const getLocation = ({ user }: AppState) => user.location;
export const getPublicRepos = ({ user }: AppState) => user.publicRepos;
export const getProfilePic = ({ user }: AppState) => user.profilePic;
