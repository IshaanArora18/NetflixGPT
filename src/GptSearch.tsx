import { useRef, useState } from "react";
import { BACKGROUND_IMAGE_SRC_SET, BACKGROUND_IMAGE_URL, TMDB_API_OPTIONS, TMDB_GET_MOVIE_BY_NAME_URL } from "./utils/constants"
import client from "./claude";
import { useDispatch, useSelector } from "react-redux";
import { addGPTSearchResults, clearGPTSearchResults } from "./utils/gptSlice";
import MovieList from "./MovieList";
import { RotatingLines } from "react-loader-spinner";

const GptSearch = () => {
    const userSearchQuery = useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const useSearchResults = useSelector((state: any) => state.gpt.gptSearchResults);
    const dispatch = useDispatch();
    const handleSubmit = async () => {
        dispatch(clearGPTSearchResults());
        setIsLoading(true);
        const query = `You are a movie suggestion engine. The user is looking for: "${userSearchQuery.current?.value}".
        Return ONLY a comma separated list of movie names with no other text, explanation, or sentences.
        If you cannot find relevant movies, return an empty string.
        Do not say anything else. Do not apologize. Do not explain. Just movie names or empty string.

        Example output: The Dark Knight, Inception, The Matrix, Interstellar, Tenet`;
        const message = await client.messages.create({
            max_tokens: 1024,
            messages: [{ role: "user", content: query }],
            model: "claude-haiku-4-5-20251001"
        });
        const text = message.content[0].type === "text" ? message.content[0].text : "";
        const movieResults = text.split(',').map(movie => movie.trim()).filter(Boolean);
        const moviePromises = movieResults.map(movie => fetch(TMDB_GET_MOVIE_BY_NAME_URL(movie), TMDB_API_OPTIONS).then(res => res.json()).then(data => data.results[0]));
        const results = await Promise.allSettled(moviePromises);
        const movies = results
            .filter(r => r.status === "fulfilled")
            .map(r => r.value)
            .filter(Boolean);
        const filterMoviesWithNoPoster = movies.filter((movie) => movie.poster_path);
        dispatch(addGPTSearchResults(filterMoviesWithNoPoster));
        setIsLoading(false);
    }
    return (
        <div className="bg-black min-h-screen relative flex items-center justify-center overflow-hidden">
            <img
                src={BACKGROUND_IMAGE_URL}
                srcSet={BACKGROUND_IMAGE_SRC_SET}
                alt="Background Image"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 w-full max-w-2xl px-4 flex flex-col items-center gap-4">
                <h1 className="text-white text-3xl font-bold text-center">Find something to watch</h1>
                <p className="text-gray-400 text-sm text-center">Search movies, TV shows, genres and more</p>

                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="flex w-full mt-2">
                    <input
                        ref={userSearchQuery}
                        type="text"
                        placeholder="Search for movies, TV shows, genres..."
                        className="flex-1 bg-white/10 backdrop-blur-sm text-white placeholder:text-gray-400 border border-white/20 border-r-0 rounded-md px-5 py-3 text-sm focus:outline-none focus:border-white/50 transition-colors duration-200"
                    />
                    <button
                        type="submit"
                        className="mx-2 bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg text-sm transition-colors duration-200 whitespace-nowrap cursor-pointer"
                    >
                        Search
                    </button>
                </form>
                {isLoading &&
                    <RotatingLines
                        height="96"
                        width="96"
                        color="#c0c0c0"
                        ariaLabel="rotating-lines-loading"
                    />
                }
                {useSearchResults && (
                    <div className="relative z-10 max-w-6xl px-4">
                        <MovieList title="Search Results" movies={useSearchResults} />
                    </div>
                )}
            </div>

        </div>
    )
}

export default GptSearch