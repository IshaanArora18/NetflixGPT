import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies} from "../utils/moviesSlice";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
                TMDB_API_OPTIONS
            );
            const data = await response.json();
            const movies = data.results;
            dispatch(addNowPlayingMovies(movies));
        } catch (error) {
            console.error("Error fetching now playing movies:", error);
        }
    }
    useEffect(() => {
        getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;