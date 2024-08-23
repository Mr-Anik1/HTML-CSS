import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES_API } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  // Fetch Data from TMDB API and update the store
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES_API, API_OPTIONS);
    const json = await data.json();

    // Add movies to the Redux store
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export { useNowPlayingMovies };
