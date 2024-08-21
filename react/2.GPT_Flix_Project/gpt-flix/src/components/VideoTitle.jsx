import { FaInfoCircle, FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="absolute aspect-video w-screen bg-gradient-to-r from-black px-10 pb-8 pt-28">
        <h1 className="text-5xl font-bold text-indigo-500">{title}</h1>
        <p className="w-1/3 py-6 text-xl text-white">{overview}</p>

        <div className="flex space-x-3">
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
