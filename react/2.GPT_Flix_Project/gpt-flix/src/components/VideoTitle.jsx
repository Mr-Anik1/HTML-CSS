import { FaInfoCircle, FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="px-4 py-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="w-1/3 py-6 text-lg">{overview}</p>

        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 rounded-lg bg-blue-600 px-6 py-1.5 text-black transition hover:opacity-90">
            <FaPlay /> <span>Play</span>
          </button>
          <button className="flex items-center space-x-2 rounded-lg bg-gray-400 px-4 py-1.5 text-white transition hover:opacity-90">
            <FaInfoCircle /> <span>More Info</span>
          </button>
        </div>
      </div>
    </>
  );
};

export { VideoTitle };
