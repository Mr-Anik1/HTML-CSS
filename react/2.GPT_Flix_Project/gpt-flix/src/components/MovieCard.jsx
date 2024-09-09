import { TMDB_IMG_URL } from "../utils/constant";

const MovieCard = ({ movie }) => {
  // If movie poster path isn't exist don't show the movie
  if (!movie.poster_path) return null;

  return (
    <>
      <div className="relative h-full w-36 overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-sky-300 md:w-48">
        <img
          className="h-28 w-full md:h-36"
          src={TMDB_IMG_URL + movie.poster_path}
          alt="Movie Poster"
        />

        <div className="px-4 py-2 pb-10">
          <h2 className="mb-1 line-clamp-1 text-lg font-bold text-gray-800 md:text-xl">
            {movie.title}
          </h2>
          <p className="line-clamp-3 text-base text-gray-700">
            {movie.overview}
          </p>
        </div>

        <div className="absolute bottom-0 w-full bg-gray-100 px-4 py-1 text-base">
          <span className="font-bold text-gray-500">Rating: </span>
          <span className="font-semibold text-sky-700">
            {movie.vote_average ? movie.vote_average.toFixed(2) : "0"}
          </span>
        </div>
      </div>
    </>
  );
};

export { MovieCard };
