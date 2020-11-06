import * as a from "../constants";
import * as api from "../../api";

export const getUserAndTvShowThunk = (username = "", countryCode = "") => {
  return async (dispatch) => {
    const { userData } = await api.getGitHubUser(username);
    const { countryCodes } = await api.getNewsByCountryCode(countryCode);
    const { tvShows } = await api.getTvShowsByCountry(countryCode);

    if (userData) {
      dispatch({
        type: a.SET_GITHUB_USER,
        payload: {
          data: {
            username: userData.login,
            name: userData.name,
            location: userData.location,
            publicRepos: userData["public_repos"],
            profilePic: userData["avatar_url"],
          },
        },
      });
    }

    if (countryCodes) {
      const result = countryCodes.articles.map((article) => ({
        source: article.source.name,
        author: article.author,
        title: article.title,
        featuredImg: article.urlToImage,
        newsLink: article.url,
      }));

      dispatch({
        type: a.SET_NEWS,
        payload: { data: result.splice(0, 4) },
      });
    }

    if (tvShows) {
      const results = tvShows.tv_episodes
        .filter(removeShowsWithNoId)
        .map(transformTvShows);

      const firstTenResults = results.splice(0, 10);
      const tvShowsWithImages = [];

      for (const item of firstTenResults) {
        const { data } = await api.getMovieImg(item.id);

        if (data.poster) {
          tvShowsWithImages.push({ ...item, posterImg: data.poster });
        }
      }

      dispatch({
        type: a.SET_TV_SHOWS,
        payload: { data: tvShowsWithImages.splice(0, 8) },
      });
    }
  };
};

const removeShowsWithNoId = (data) => !!data.tvseries_imdb_id;

const transformTvShows = (data) => ({
  title: data.tvseries_name,
  id: data.tvseries_imdb_id,
});
