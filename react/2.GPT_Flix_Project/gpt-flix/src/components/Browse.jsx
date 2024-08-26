import { useSelector } from "react-redux";
import { useAllCategoryMovies } from "../hooks/useAllCategoryMovies";
import { GptSearch } from "./GptSearch";
import { Header } from "./Header";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";

const Browse = () => {
  // true or false
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

  // This hook fetch movies data from the TMDB API and update the store
  useAllCategoryMovies();

  return (
    <>
      <div>
        <Header />

        {showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
    </>
  );
};

export { Browse };
