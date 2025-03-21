function App() {
  return (
    <div className="h-dvh bg-blue-500 px-15 py-5">
      <div className="grid h-full grid-cols-[1fr_35rem] justify-center gap-10">
        <div className="space-y-12">
          <form className="justify-self-center" action="">
            <input
              className="w-[18rem] rounded-2xl bg-amber-50 px-3 py-1.5 outline-none focus:ring focus:ring-cyan-900"
              type="search"
              name=""
              id=""
            />
          </form>
          <div className="w-full space-y-3.5 bg-blue-300 p-3">
            <div className="flex w-full gap-12 bg-amber-950 px-3 py-2">
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
        <div className="bg-amber-300 px-3 py-2">
          <div className="space-y-3 bg-blue-400 p-4">
            <h2 className="text-2xl">Watch list</h2>
            <div className="flex w-[20rem] justify-between text-lg">
              <p>Movie: 21</p>
              <p>Series: 2</p>
            </div>
          </div>
          <div className="w-full space-y-3.5 bg-blue-300 p-3">
            <div className="flex w-full gap-12 bg-amber-950 px-3 py-2">
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
