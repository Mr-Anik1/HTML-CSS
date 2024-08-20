import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const movieTrailer = useSelector((store) => store.movies?.trailerVideo);

  // This hook fetch moive trailer data from the TMDB API and update the store
  useMovieTrailer({ movieId });

  return (
    <>
      <div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${movieTrailer?.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </>
  );
};

export { VideoBackground };
