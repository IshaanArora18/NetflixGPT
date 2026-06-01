import { TMDB_IMAGE_BASE_URL } from "./utils/constants";

const MovieCard = ({ title, poster_path }: { title: string; poster_path: string }): any => {
  return (
    <div>
        <div className="w-48 pr-4">
            <img src={TMDB_IMAGE_BASE_URL + poster_path} alt={title} />
        </div>
    </div>
  )
}

export default MovieCard