import { useAllCategoryMovies } from "../hooks/useAllCategoryMovies";
import { Header } from "./Header";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";

const Browse = () => {
  // This hook fetch movies data from the TMDB API and update the store
  useAllCategoryMovies();

  return (
    <>
      <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
      </div>
    </>
  );
};

export { Browse };
