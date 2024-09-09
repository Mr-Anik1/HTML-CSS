import { useSelector } from "react-redux";
import { VideoBackground } from "./VideoBackground";
import { VideoTitle } from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovies = movies[0];
  const { title, original_title, overview, id } = mainMovies;

  return (
    <>
      <div>
        <VideoTitle
          title={title ? title : original_title}
          overview={overview}
        />
        <VideoBackground movieId={id} />
      </div>
    </>
  );
};

export { MainContainer };
