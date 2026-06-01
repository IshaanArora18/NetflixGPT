import { useSelector } from "react-redux";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpcomingMovies from "./hooks/useUpcomingMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import usePopularMovies from "./hooks/usePopularMovies";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const movies = useSelector((store: any) => store?.movies?.nowPlayingMovies);
  return (
    <div>
      {/* Passing now playing movies to MainContainer */}
      <MainContainer movies={movies} />
      <SecondaryContainer />
    </div>
  )
}

export default Browse

/*
  - Main Container
    -Video Title
    -Video Background
  - Secondary Container
    -Movie List * N
      -Movie Card * M
 */