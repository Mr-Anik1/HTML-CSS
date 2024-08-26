import { BG_IMAGE } from "../utils/constant";
import { GptMovieSuggestions } from "./GptMovieSuggestions";
import { GptSearchBar } from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div>
        {/* Background Image Section */}
        <div className="absolute">
          <img
            className="h-screen w-screen bg-cover"
            src={BG_IMAGE}
            alt="bg-image"
          />
        </div>

        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export { GptSearch };
