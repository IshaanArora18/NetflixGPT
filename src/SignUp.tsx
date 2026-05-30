const SignUp = () => {
  return (
    <div>
      <form className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
        <input className="border border-gray-300 rounded py-2 px-4" type="text" placeholder="Name"></input>
        <input className="border border-gray-300 rounded py-2 px-4" type="email" placeholder="Email"></input>
        <input className="border border-gray-300 rounded py-2 px-4" type="password" placeholder="Password"></input>
        <button className="bg-red-600 text-white py-2 px-4 rounded cursor-pointer" type="submit">Sign Up</button>
        <p>Are you ready to watch movies and TV shows? <a href="/login" className="text-blue-500 hover:underline">Sign In</a></p>
      </form>
    </div>
  )
}

export default SignUp