import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { Header } from "./Header";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";

const Browse = () => {
  // This hook fetch data from the TMDB API and update the store
  useNowPlayingMovies();

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
