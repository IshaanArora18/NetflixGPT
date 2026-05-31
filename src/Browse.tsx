import { useSelector } from "react-redux";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  
  useNowPlayingMovies();
  return (
    <div>
      <MainContainer/>
      <SecondaryContainer/>
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