import { useEffect, useState } from "react";
import { API_OPTIONS, MOVIE_TRAILER_VIDEO_API } from "../utils/constant";

const useMovieVideo = (movieId) => {
  const [movieVideo, setMovieVideo] = useState(null);

  // Fetch Movie Video
  const getMovieVideos = async () => {
    const trailerVideoAPI = MOVIE_TRAILER_VIDEO_API(movieId);

    const data = await fetch(trailerVideoAPI, API_OPTIONS);
    const json = await data.json();

    const filterVideoData = json.results?.filter(
      (video) => video.type === "Trailer",
    );
    const trailer =
      filterVideoData.length !== 0 ? filterVideoData[0] : json.results[0];

    setMovieVideo(trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return movieVideo;
};

export { useMovieVideo };
