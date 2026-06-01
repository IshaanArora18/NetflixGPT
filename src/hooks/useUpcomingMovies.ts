import { useEffect } from "react";
import { TMDB_API_OPTIONS, TMDB_GET_UPCOMING_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies} from "../utils/moviesSlice";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        try {
            const response = await fetch(
                TMDB_GET_UPCOMING_URL,
                TMDB_API_OPTIONS
            );
            const data = await response.json();
            const movies = data.results;
            dispatch(addUpcomingMovies(movies));
        } catch (error) {
            console.error("Error fetching upcoming movies:", error);
        }
    }
    useEffect(() => {
        getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;