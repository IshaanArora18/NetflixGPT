import { useEffect } from "react";
import { TMDB_API_OPTIONS, TMDB_GET_NOW_PLAYING_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies} from "../utils/moviesSlice";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const movies = useSelector((store: any) => store?.movies?.nowPlayingMovies);
    const getNowPlayingMovies = async () => {
        try {
            const response = await fetch(
                TMDB_GET_NOW_PLAYING_URL,
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
        if(!movies) {
            getNowPlayingMovies();
        }
    }, [])

}

export default useNowPlayingMovies;