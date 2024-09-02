import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_TRAILER_VIDEO_API } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movies?.trailerVideo);

  const getMovieVideos = async () => {
    const trailerVideoAPI = MOVIE_TRAILER_VIDEO_API(movieId);

    const data = await fetch(trailerVideoAPI, API_OPTIONS);
    const json = await data.json();

    const filterVideoData = json.results?.filter(
      (video) => video.type === "Trailer",
    );
    const trailer =
      filterVideoData.length !== 0 ? filterVideoData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    // If(!movieTrailer) getMovieVideos();
    !movieTrailer && getMovieVideos();
  }, []);
};

export { useMovieTrailer };
