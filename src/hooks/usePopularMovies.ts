import { useEffect } from "react";
import { TMDB_API_OPTIONS, TMDB_GET_POPULAR_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies} from "../utils/moviesSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch();
    const movies = useSelector((store: any) => store?.movies?.popularMovies);
    const getPopularMovies = async () => {
        try {
            const response = await fetch(
                TMDB_GET_POPULAR_URL,
                TMDB_API_OPTIONS
            );
            const data = await response.json();
            const movies = data.results;
            dispatch(addPopularMovies(movies));
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    }
    useEffect(() => {
        if(!movies) {
            getPopularMovies();
        }
    }, [])
}

export default usePopularMovies;