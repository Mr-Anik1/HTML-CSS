import { useSelector } from "react-redux";
import { LANG } from "../utils/languageConstant";

const GptSearchBar = () => {
  const lang_key = useSelector((store) => store.config?.lang);

  return (
    <>
      <div className="flex items-center justify-center pt-16">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="z-20 grid w-1/2 grid-cols-12 space-x-3 bg-black px-4 py-2"
        >
          <input
            type="search"
            id="search"
            placeholder={LANG[lang_key]?.gptSearchPlaceholder}
            className="col-span-9 rounded-sm p-2"
          />
          <button className="col-span-3 rounded-lg bg-purple-600 p-2 font-semibold text-white hover:bg-opacity-80">
            {LANG[lang_key]?.search}
          </button>
        </form>
      </div>
    </>
  );
};

export { GptSearchBar };
