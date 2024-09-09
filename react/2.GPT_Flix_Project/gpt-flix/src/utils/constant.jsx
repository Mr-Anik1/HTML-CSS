export const userIcon =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const LOGO = "https://iili.io/d0HCgVV.png";

export const FAVICON = "https://iili.io/dX2x1Nj.png";

export const BG_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/89a29202-8f93-4dd9-b75b-71ba2b0a7620/BD-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/75731184?v=4";

/**
 * @Warning_ForgiveMe
 * I have to store these secret keys in the.env file. I want to deploy my app in the Firebase, but if I want to add a secret variable in the Firebase, it is a paid version. Now I want to use the free version of Firebase; for this reason, I didn't add this secret variable in the.env file.
 *
 */
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzJkZWYwNmI0YzZlMTIxNjEyMDhlY2QxODU0ZTJmMCIsIm5iZiI6MTcyMzk2NTI3MS4wNjY4NzksInN1YiI6IjY2YzE5ODZmZWNiYjE5MTVjYzg5OWUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._A3yj3dsMpKcN2lOwMCPtkp1sk51X_g8hT8mkfXxBNI",
  },
};

export const GEMINI_AI_KEY = "AIzaSyAivCdLBbUwikGO69FNXS7jeHlcUWuQlhg";

// ----------------//--//---------------------//

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w300";

export const NOW_PLAYING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const POPULAR_MOVIES_API =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const UPCOMING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const TOP_RATED_MOVIES_API =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const MOVIE_TRAILER_VIDEO_API = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
};

export const QUERY = (searchValue) => {
  const queryText = `Act as a movie recommendation system and suggest some movies for the query: ${searchValue}.  Only give me the names of 5 movies with commas separated, like the example given below. Example result: Longlegs, Twisters, The Godfather, Spirited Away, The Green Mile.`;

  return queryText;
};

export const SEARCH_MOVIE_API = (movieName) => {
  const searchAPI = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`;

  return searchAPI;
};

export const MOVIE_DETAILS_API_BY_ID = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}`;
};
