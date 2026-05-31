const VideoTitle = ({ movie }: { movie: any }) => {
  return (
    <div>
      <h1>{movie?.title}</h1>
      <p>{movie?.overview}</p>
    </div>
  )
}

export default VideoTitle