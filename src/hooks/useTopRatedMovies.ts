import { useEffect } from "react";
import { TMDB_API_OPTIONS, TMDB_GET_TOP_RATED_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies} from "../utils/moviesSlice";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();
    const movies = useSelector((store: any) => store?.movies?.topRatedMovies);
    const getTopRatedMovies = async () => {
        try {
            const response = await fetch(
                TMDB_GET_TOP_RATED_URL,
                TMDB_API_OPTIONS
            );
            const data = await response.json();
            const movies = data.results;
            dispatch(addTopRatedMovies(movies));
        } catch (error) {
            console.error("Error fetching top rated movies:", error);
        }
    }
    useEffect(() => {
        if(!movies) {
            getTopRatedMovies();
        }
    }, [])
}

export default useTopRatedMovies;