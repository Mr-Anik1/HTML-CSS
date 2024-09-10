import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames && !movieResults) return null;

  return (
    <>
      <div className="mx-2 mt-6 bg-black bg-opacity-75 px-2 py-5 text-white md:mx-3">
        <div>
          {movieNames?.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export { GptMovieSuggestions };
