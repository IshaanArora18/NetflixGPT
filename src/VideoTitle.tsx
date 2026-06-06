const VideoTitle = ({ movie }: { movie: any }) => {
  const {title, overview} = movie;
  return (
    <div className="w-screen pt-[20%] px-24 aspect-video absolute text-white bg-linear-to-r from-black">
      <h1 className="text-xl md:text-3xl font-bold text-white"> {title} </h1>
      <p className="text-lg text-white inline-block"> {overview} </p>
      <div className="pt-2">
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer">Play</button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 ml-2 cursor-pointer">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle