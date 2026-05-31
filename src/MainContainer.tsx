import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {

 const movies = useSelector((store: any) => store?.movies?.nowPlayingMovies);
 if(!movies) return;
 const mainMovie = movies?.[0];
  return (
    <div>
        <VideoTitle movie={mainMovie}/>
        <VideoBackground movie={mainMovie}/>
    </div>
  )
}

export default MainContainer