import { BG_IMAGE } from "../utils/constant";
import { GptMovieSuggestions } from "./GptMovieSuggestions";
import { GptSearchBar } from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div>
        {/* Background Image Section */}
        <img
          className="fixed -z-10 h-screen w-screen object-cover"
          src={BG_IMAGE}
          alt="bg-image"
        />

        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export { GptSearch };
