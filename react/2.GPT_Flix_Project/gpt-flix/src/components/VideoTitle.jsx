import { FaInfoCircle, FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="absolute z-[2] aspect-video w-screen bg-gradient-to-r from-black px-10 pb-14 pt-32 md:pt-[4.5rem] lg:pt-32">
        <h1 className="text-3xl font-bold text-indigo-500 md:text-5xl">
          {title}
        </h1>
        <p className="line-clamp-3 w-1/3 pt-6 text-xl text-white md:line-clamp-5">
          {overview}
        </p>

        <div className="mt-6 flex space-x-3">
          <button className="flex items-center space-x-2 rounded-lg bg-sky-400 px-6 py-1.5 text-black transition hover:bg-opacity-80">
            <FaPlay /> <span>Play</span>
          </button>
          <button className="flex items-center space-x-2 rounded-lg bg-slate-600 px-4 py-1.5 text-white transition hover:bg-opacity-80">
            <FaInfoCircle /> <span>More Info</span>
          </button>
        </div>
      </div>
    </>
  );
};

export { VideoTitle };
