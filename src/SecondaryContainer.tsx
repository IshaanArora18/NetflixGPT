import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store: any) => store?.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store: any) => store?.movies?.popularMovies);
  const topRatedMovies = useSelector((store: any) => store?.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store: any) => store?.movies?.upcomingMovies);
  return (
    <div className="bg-black">
      <div className="mt-0 lg:-mt-52 relative z-10">
      <MovieList title="Now Playing" movies={nowPlayingMovies}/>
      </div>
      <MovieList title="Popular" movies={popularMovies}/>
      <MovieList title="Top Rated" movies={topRatedMovies}/>
      <MovieList title="Upcoming" movies={upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer