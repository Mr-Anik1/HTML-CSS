import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black">
        {/* Only -mt-24 this child container not full secondary container */}
        <div className="relative z-20 -mt-24">
          <MovieList
            title={"Now Playing Movies"}
            movies={movies?.nowPlayingMovies}
          />
          <MovieList title={"Upcomig Movies"} movies={movies?.upcomingMovies} />
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
