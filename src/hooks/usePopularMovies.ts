import { useEffect } from "react";
import { TMDB_API_OPTIONS, TMDB_GET_POPULAR_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies} from "../utils/moviesSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch();
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
        getPopularMovies();
    }, [])
}

export default usePopularMovies;