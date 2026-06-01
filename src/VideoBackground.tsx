import useVideoBackground from "./hooks/useVideoBackground";

const VideoBackground = ({ movie }: { movie: any }) => {
  const movieId = movie.id;
  const backgroundVideoKey = useVideoBackground(movieId);

  return (
    <div>
      <iframe className="w-screen aspect-video" src={`https://www.youtube.com/embed/${backgroundVideoKey}?autoplay=1&mute=1`} title="YouTube video player" ></iframe>
    </div>
  )
}

export default VideoBackground;