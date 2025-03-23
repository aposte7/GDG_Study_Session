import Search from "./components/Search";
import { UseMovie } from "./contexts/movie/useMovie";

function App() {
  const { movies, status, watchList, removeFromWatchList, addToWatchList } =
    UseMovie();

  return (
    <div className="h-screen overflow-hidden bg-gray-900 px-6 py-5 text-gray-200">
      {status === "loading" && (
        <div className="fixed top-0 left-0 flex h-screen w-full items-center justify-center bg-gray-800/50 backdrop-blur-md">
          <p className="text-xl font-semibold text-white">Loading...</p>
        </div>
      )}
      <header className="navbar flex items-center justify-between bg-gray-800 px-6 py-4 shadow-lg">
        <h1 className="logo-text text-3xl font-bold text-gray-100">Filmer</h1>
        <div className="flex flex-1 justify-center">
          <Search />
        </div>
      </header>
      <div className="grid h-full grid-cols-1 justify-center gap-6 md:grid-cols-[1fr_35rem]">
        <div className="h-full space-y-8 overflow-y-auto rounded-lg bg-gray-800 p-4 shadow-md">
          {movies.map((movie, index) => {
            const posterPath = movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "placeholder.jpg";
            const isInWatchList = watchList.some(
              (watchListMovie) => watchListMovie.id === movie.id,
            );
            return (
              <div
                key={index}
                className="mx-auto flex w-[90%] gap-6 rounded-lg bg-gray-700 p-4 shadow-sm transition hover:shadow-md"
              >
                <img
                  src={`${posterPath}`}
                  className="h-24 w-20 rounded-md"
                  alt=""
                />
                <div className="grid w-full grid-cols-[1fr_13rem] grid-rows-2 justify-between py-2">
                  <h2 className="text-xl text-gray-100">{movie.title}</h2>
                  <p className="text-lg text-gray-400">
                    {movie.release_date || "N/A"}
                  </p>
                  <p className="text-lg text-gray-400">
                    {movie.vote_average?.toFixed(1) || "N/A"} ⭐
                  </p>
                  {isInWatchList ? (
                    <button
                      onClick={() => removeFromWatchList(movie.id)}
                      className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 focus:ring focus:ring-red-300 focus:outline-none"
                    >
                      Delete
                    </button>
                  ) : (
                    <button
                      onClick={() => addToWatchList(movie)}
                      className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 focus:ring focus:ring-green-300 focus:outline-none"
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="h-full overflow-y-auto rounded-lg bg-gray-800 px-3 py-2">
          <div className="space-y-3 rounded-lg bg-gray-700 p-4">
            <h2 className="text-2xl text-gray-100">Watch list</h2>
            <div className="flex w-[20rem] justify-between text-lg text-gray-400">
              <p>Movie: {watchList.length}</p>
            </div>
          </div>
          <div className="w-full space-y-3.5 rounded-lg bg-gray-700 p-3">
            {watchList.map((movie) => (
              <div
                key={movie.id}
                className="flex w-full gap-12 rounded-lg bg-gray-600 px-3 py-2"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="h-20 w-18 rounded-md"
                  alt={movie.title}
                />
                <div className="grid w-full grid-cols-2 grid-rows-2 justify-between gap-2 py-2">
                  <h2 className="text-xl text-gray-100">{movie.title}</h2>
                  <p className="text-lg text-gray-400">
                    {movie.release_date || "N/A"}
                  </p>
                  <p className="text-lg text-gray-400">
                    {movie.vote_average?.toFixed(1) || "N/A"} ⭐
                  </p>
                  <button
                    onClick={() => removeFromWatchList(movie.id)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 focus:ring focus:ring-red-300 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
