import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  API_OPTIONS,
  NOW_PLAYING_MOVIES_API,
  POPULAR_MOVIES_API,
  TOP_RATED_MOVIES_API,
  UPCOMING_MOVIES_API,
} from "../utils/constant";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/moviesSlice";

const useAllCategoryMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies,
  );

  // Fetch Data from TMDB API and update the store
  const getAllCategoryMovies = async () => {
    /**
     * @Now_Playing_Movies
     */
    const nowPlayingMoviesData = await fetch(
      NOW_PLAYING_MOVIES_API,
      API_OPTIONS,
    );
    const nowPlayingMoviesJSON = await nowPlayingMoviesData.json();
    // Add Now Playing Movies data to the Redux store
    dispatch(addNowPlayingMovies(nowPlayingMoviesJSON.results));

    /**
     * @Upcoming_Movies
     */
    const upcomingMoviesData = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
    const upcomingMoviesJSON = await upcomingMoviesData.json();
    // Add Up Coming Movies data to the Redux store
    dispatch(addUpcomingMovies(upcomingMoviesJSON.results));

    /**
     * @Popular_Movies
     */
    const popuplarMoviesData = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
    const popuplarMoviesJSON = await popuplarMoviesData.json();
    // Add Popular Movies data to the Redux store
    dispatch(addPopularMovies(popuplarMoviesJSON.results));

    /**
     * @Top_Rated_Movies
     */
    const topRatedMoviesData = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS);
    const topRatedMoviesJSON = await topRatedMoviesData.json();
    // Add Top Rated Movies data to the Redux store
    dispatch(addTopRatedMovies(topRatedMoviesJSON.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getAllCategoryMovies();
  }, []);
};

export { useAllCategoryMovies };
