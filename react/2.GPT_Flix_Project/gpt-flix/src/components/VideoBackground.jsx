import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const movieTrailer = useSelector((store) => store.movies?.trailerVideo);

  // This hook fetch moive trailer data from the TMDB API and update the store
  useMovieTrailer({ movieId });

  return (
    movieTrailer && (
      <>
        <div className="w-screen pt-32 md:pt-0">
          <div className="relative w-screen overflow-hidden pt-[56.25%]">
            <iframe
              className="pointer-events-none absolute left-0 top-0 h-full w-full origin-center scale-[1.4] border-0"
              src={`https://www.youtube.com/embed/${movieTrailer?.key}?autoplay=1&mute=1&loop=1&playlist=${movieTrailer?.key}&modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&fs=0&playsinline=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </>
    )
  );
};

export { VideoBackground };
