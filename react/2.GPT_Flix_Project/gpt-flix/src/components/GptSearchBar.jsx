import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, QUERY, SEARCH_MOVIE_API } from "../utils/constant";
import { model } from "../utils/geminiAI";
import { addGptMovieResults } from "../utils/gptSlice";
import { LANG } from "../utils/languageConstant";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const lang_key = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const movieAPI = SEARCH_MOVIE_API(movie);

    // Fetch search movie data from the TMDB API
    const data = await fetch(movieAPI, API_OPTIONS);
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const geminiQuery = QUERY(searchText?.current?.value);

    // Make an API call to Gemini API to get movie results
    const result = await model.generateContent(geminiQuery);
    const response = await result.response;
    const text = await response.text();

    // Create array of movie names and remove whitespace from the movie names.
    const movieNames = text.split(",").map((movie) => movie.trim());

    // For each movie I will search TMDB API and it will returns array of promises
    const promiseArray = movieNames.map((movie) => searchMovieTMDB(movie));
    // Promise.all resolve all promises
    const movieResults = await Promise.all(promiseArray);

    // Update the gpt redux store with movieNames and movieResults
    dispatch(addGptMovieResults({ movieNames, movieResults }));
  };

  return (
    <>
      <div className="flex items-center justify-center pt-36 md:pt-20">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid w-[80%] grid-cols-12 space-x-3 bg-black px-4 py-2 md:w-[55%] lg:w-[45%]"
        >
          <input
            ref={searchText}
            type="search"
            id="search"
            placeholder={LANG[lang_key]?.gptSearchPlaceholder}
            className="col-span-8 rounded-lg border-2 p-1 focus:border-green-500 focus:outline-none focus:ring-0 md:col-span-9 md:p-2"
          />
          <button
            onClick={handleGptSearchClick}
            className="col-span-4 rounded-lg bg-purple-600 p-1 font-semibold text-white hover:bg-opacity-80 md:col-span-3 md:p-2"
          >
            {LANG[lang_key]?.search}
          </button>
        </form>
      </div>
    </>
  );
};

export { GptSearchBar };
