import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black pt-4 md:pt-0">
        {/* Only -mt-32 this child container not full secondary container */}
        <div className="relative z-20 md:-mt-20 lg:-mt-32">
          <MovieList
            title={"Now Playing Movies"}
            movies={movies?.nowPlayingMovies}
          />
          <MovieList title={"Upcomig Movies"} movies={movies?.upcomingMovies} />
          <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies?.topRatedMovies}
          />
        </div>
      </div>
    )
  );
};

export { SecondaryContainer };
