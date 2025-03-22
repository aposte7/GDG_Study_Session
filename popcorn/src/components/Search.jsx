import { UseMovie } from "../contexts/movie/useMovie";

function Search() {
  const { handleSearch } = UseMovie();

  const handleInputChange = (e) => {
    handleSearch(e.target.value);
  };
  return (
    <form className="justify-self-center">
      <input
        onChange={handleInputChange}
        className="w-[18rem] rounded-2xl bg-amber-50 px-3 py-1.5 outline-none focus:ring focus:ring-cyan-900"
        type="search"
        name=""
        id=""
      />
    </form>
  );
}

export default Search;
