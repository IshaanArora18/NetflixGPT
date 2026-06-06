import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }: { title: string; movies: any[] }) => {
  
  return (
    <div className="px-6">
        <h1 className="text-lg md:text-2xl lg:text-3xl py-4 text-white">{title}</h1>
    <div className="flex overflow-x-auto">
    <div className="flex" >
        {movies?.map((movie:any)=><MovieCard key={movie.id} title={movie.title} poster_path={movie.poster_path} />)}
    </div>
    </div>
    </div>
  )
}

export default MovieList