import Search from "./components/Search";
import { UseMovie } from "./contexts/movie/useMovie";

function App() {
  const { movies, status } = UseMovie();

  return (
    <div className="h-dvh bg-blue-500 px-15 py-5">
      {status === "loading" && (
        <div className="fixed top-0 left-0 flex h-dvh w-full items-center justify-center bg-neutral-500/45 backdrop-blur-md">
          <p className="text-xl text-white">Loading...</p>
        </div>
      )}
      <div className="grid h-full grid-cols-[1fr_35rem] justify-center gap-10">
        <div className="space-y-12">
          <Search />
          <div className="w-full space-y-3.5 bg-blue-300 p-3">
            {movies.map((movie, index) => {
              const posterPath = movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "placeholder.jpg";
              return (
                <div
                  key={index}
                  className="mx-auto flex w-[90%] gap-12 bg-blue-400 px-3 py-2"
                >
                  <img
                    src={`${posterPath}`}
                    className="h-20 w-18 bg-amber-600"
                    alt=""
                  />
                  <div className="grid w-full grid-cols-[1fr_13rem] grid-rows-2 justify-between py-2">
                    <h2 className="text-xl">{movie.title}</h2>
                    <p className="text-lg">{movie.release_date || "N/A"}</p>
                    <p className="text-lg">
                      {movie.vote_average?.toFixed(1) || "N/A"} ⭐
                    </p>
                    <p className="text-lg">100 min</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-amber-300 px-3 py-2">
          <div className="space-y-3 bg-blue-400 p-4">
            <h2 className="text-2xl">Watch list</h2>
            <div className="flex w-[20rem] justify-between text-lg">
              <p>Movie: 21</p>
              <p>Series: 2</p>
            </div>
          </div>
          <div className="w-full space-y-3.5 bg-blue-300 p-3">
            <div className="flex w-full gap-12 bg-blue-400 px-3 py-2">
              <img src="" className="h-20 w-18 bg-amber-600" alt="" />
              <div className="grid w-full grid-cols-2 grid-rows-2 justify-between gap-2 py-2">
                <h2 className="text-xl">Breaking Bad</h2>
                <p className="text-lg">2003</p>
                <p className="text-lg">8.9 ⭐</p>
                <p className="text-lg">100 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
