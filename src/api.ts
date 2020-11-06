import axios from "axios";

export type GitHubUser = {
  login: string;
  name: string;
  location: string;
  public_repos: string;
  avatar_url: string;
};
export const getGitHubUser = (username: string) =>
  axios
    .get(`https://api.github.com/users/${username}`)
    .then(({ data }: { data: GitHubUser }) => ({ data }))
    .catch((error) => ({ error }));

export type NewsByCountryCode = {
  articles: {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: { id: null | string; name: string };
    title: string;
    url: string;
    urlToImage: string;
  }[];
};
export const getNewsByCountryCode = (countryCode: string) => {
  return axios
    .get(
      `http://newsapi.org/v2/top-headlines?country=${countryCode.toLowerCase()}&apiKey=1caad543be0349789db8d471ff855147`
    )
    .then(({ data }: { data: NewsByCountryCode }) => ({ data }))
    .catch((error) => ({ error }));
};

export type TvEpisode = {
  air_date: string;
  air_time: string;
  episode_name: string;
  episode_number: number;
  network: string;
  runtime: number;
  season_number: number;
  tvseries_imdb_id: null | string;
  tvseries_name: string;

};

export type TvShowsByCountry = {
  tv_episodes: TvEpisode[];
};
export const getTvShowsByCountry = (countryCode: string) => {
  return axios
    .get(
      `https://movies-tvshows-data-imdb.p.rapidapi.com/?country=${countryCode.toUpperCase()}&type=get-tvschedule-bycountry`,
      {
        headers: {
          "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
          "x-rapidapi-key":
            "1ac3dcb79fmsh4f742cf6ca9fd0ep13c61ejsn092684df3384",
        },
      }
    )
    .then(({ data }: { data: TvShowsByCountry }) => ({ data }))
    .catch((error) => ({ error }));
};

export type MovieImg = {
  IMDB: string;
  fanart: string;
  poster?: string;
};
export const getMovieImg = (imdbID: string): any => {
  return axios
    .get(
      `https://movies-tvshows-data-imdb.p.rapidapi.com/?imdb=${imdbID}&type=get-show-images-by-imdb`,
      {
        headers: {
          "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
          "x-rapidapi-key":
            "1ac3dcb79fmsh4f742cf6ca9fd0ep13c61ejsn092684df3384",
        },
      }
    )
    .then(({ data }: { data: MovieImg }) => ({ data }))
    .catch((error) => ({ error }));
};
