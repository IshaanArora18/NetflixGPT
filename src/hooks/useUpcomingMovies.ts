import { useEffect } from "react";
import { TMDB_API_OPTIONS, TMDB_GET_UPCOMING_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies} from "../utils/moviesSlice";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    const movies = useSelector((store: any) => store?.movies?.upcomingMovies);
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
        if(!movies) {
            getUpcomingMovies();
        }
    }, [])
}

export default useUpcomingMovies;