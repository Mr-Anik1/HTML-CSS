import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <>
      <div className="mx-3 mt-6 bg-black bg-opacity-75 px-2 py-5 text-white">
        <div>
          {movieNames.map((movieName, index) => (
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
