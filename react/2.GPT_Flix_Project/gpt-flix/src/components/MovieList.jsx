import { MovieCard } from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <>
      <div className="px-4 py-2">
        <h1 className="pb-1 text-2xl text-white md:text-3xl">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex gap-6 p-4">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { MovieList };
