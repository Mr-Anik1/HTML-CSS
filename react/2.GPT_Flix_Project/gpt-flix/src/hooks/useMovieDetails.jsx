import { useEffect, useState } from "react";
import { API_OPTIONS, MOVIE_DETAILS_API_BY_ID } from "../utils/constant";

const useMovieDetails = (movieId) => {
  const [movieInfo, setMovieInfo] = useState(null);

  const getMovieDetails = async () => {
    const movieDetailsAPI = MOVIE_DETAILS_API_BY_ID(movieId);

    const data = await fetch(movieDetailsAPI, API_OPTIONS);
    const json = await data.json();

    setMovieInfo(json);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return movieInfo;
};

export { useMovieDetails };
