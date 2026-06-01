import VideoBackground from "./VideoBackground"

import VideoTitle from "./VideoTitle"

const MainContainer = ({ movies }: { movies: any }) => {

  if (!movies) return;
  const mainMovie = movies?.[0];
  return (
    <div>
      <VideoTitle movie={mainMovie} />
      <VideoBackground movie={mainMovie} />
    </div>
  )
}

export default MainContainer