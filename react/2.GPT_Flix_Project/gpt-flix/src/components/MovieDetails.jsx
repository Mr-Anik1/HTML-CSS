import ReactCountryFlag from "react-country-flag";
import { Link, useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { useMovieVideo } from "../hooks/useMovieVideo";
import { LOGO, TMDB_IMG_URL } from "../utils/constant";
import { Footer } from "./Footer";
import { Shimmer } from "./Shimmer";

const MovieDetails = () => {
  const { movieId } = useParams();

  // Fetch Movie Data from Tmdb
  const movieInfo = useMovieDetails(movieId);
  const movieVideo = useMovieVideo(movieId); // Sometime it shows undefined.

  if (!movieInfo && !movieVideo) {
    return <Shimmer />;
  }

  return (
    movieInfo && (
      <>
        <div className="flex min-h-screen flex-col">
          {/* Content Section */}
          <div className="relative flex-1">
            {/* BG-Image */}
            <img
              className="fixed -z-10 h-screen w-screen"
              src={TMDB_IMG_URL + movieInfo.poster_path}
              alt="Movie Poster"
            />

            {/* Header */}
            <div className="flex w-screen items-center justify-between bg-gradient-to-b from-black px-4 py-2">
              <img className="w-44" src={LOGO} alt="logo" />

              <Link to={"/browse"}>
                <button className="rounded-md bg-sky-500 px-4 py-1.5 font-semibold shadow-md transition duration-200 hover:bg-gradient-to-r hover:from-pink-700 hover:to-teal-500 hover:text-white hover:shadow-slate-400">
                  Back
                </button>
              </Link>
            </div>

            {/* Movie title and video */}
            <div className="flex flex-col items-stretch justify-between pt-4 md:flex-row md:gap-4">
              {/* Movie Title and Overview */}
              <div className="flex flex-col justify-center bg-gradient-to-r from-black px-4 py-6 md:w-[55%] md:py-8 md:pl-12">
                <h1 className="text-3xl font-bold text-indigo-500 md:text-5xl">
                  {movieInfo.title ? movieInfo.title : movieInfo.original_title}
                </h1>
                <p className="pt-6 text-xl text-white">
                  {movieInfo.overview || ""}
                </p>
              </div>

              {/* Movie Video is Exist */}
              {movieVideo && (
                <div className="flex-1 bg-gradient-to-b from-black md:bg-gradient-to-l md:py-8 md:pr-12">
                  <div className="relative overflow-hidden pt-[56.25%]">
                    <iframe
                      className="pointer-events-none absolute left-0 top-0 h-full w-full origin-center scale-[1.35] border-0"
                      src={`https://www.youtube.com/embed/${movieVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${movieVideo?.key}&modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&fs=0&playsinline=1`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>

            {/* Movie Release, Language, country */}
            <div className="space-y-4 bg-gradient-to-r from-black to-sky-600 px-6 py-6 text-lg font-semibold text-white shadow-lg md:w-[60%] md:rounded-r-lg md:px-12 lg:w-[45%]">
              <div className="mb-4 border-b border-slate-600 pb-2 text-xl font-semibold md:text-3xl">
                Movie Details
              </div>

              <div className="flex justify-between">
                <span className="font-bold text-gray-400">Country:</span>
                <div className="text-white">
                  {movieInfo.production_countries[0]?.name || "N/A"}{" "}
                  <ReactCountryFlag
                    countryCode={
                      movieInfo.production_countries[0]?.iso_3166_1 || "US"
                    }
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <span className="font-bold text-gray-400">Runtime:</span>
                <span>
                  {movieInfo.runtime ? `${movieInfo.runtime} min` : "N/A"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-bold text-gray-400">Release Date:</span>
                <span>{movieInfo.release_date || "N/A"}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-bold text-gray-400">Budget:</span>
                <span>
                  {movieInfo.budget
                    ? `$${movieInfo.budget.toLocaleString()}`
                    : "N/A"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-bold text-gray-400">Revenue:</span>
                <span>
                  {movieInfo.revenue
                    ? `$${movieInfo.revenue.toLocaleString()}`
                    : "N/A"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-bold text-gray-400">Review:</span>
                <span>
                  {movieInfo.vote_average
                    ? `${movieInfo.vote_average} / 10`
                    : "N/A"}
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </>
    )
  );
};

export { MovieDetails };
