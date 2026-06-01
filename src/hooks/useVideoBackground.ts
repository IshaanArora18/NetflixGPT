import { useEffect, useState } from "react";
import { FORM_TMDB_MOVIE_URL, TMDB_API_OPTIONS } from "../utils/constants";

const useVideoBackground = (movieId: number) => {
    const [backgroundVideoKey, setBackgroundVideoKey] = useState<string | null>(null);
    const getVideoBackground = async () => {
        try {
            const response = await fetch(FORM_TMDB_MOVIE_URL(movieId), TMDB_API_OPTIONS);
            const data = await response.json();
            const videos = data.results;
            const trailerVideos = videos.filter((video: any) => video.type === "Trailer");
            const backgroundVideo = trailerVideos.length ? trailerVideos[0] : videos[0];
            setBackgroundVideoKey(backgroundVideo.key);
        } catch (error) {
            console.error("Error fetching movie data:", error);
        }
    };
    useEffect(() => {
        getVideoBackground();
    }, [])
    return backgroundVideoKey ;
};

export default useVideoBackground;