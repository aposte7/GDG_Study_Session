import { useEffect, useReducer } from "react";
import MovieContext from "./Context";

const initialState = {
  movies: [],
  watchList: JSON.parse(localStorage.getItem("watchList")) || [],
  status: {
    value: "initial" /**loading error ready */,
    message: "",
  },
  searchQuery: "",
};

const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

// Fetch popular movies

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        status: {
          ...state.status,
          value: "loading",
        },
      };
    case "error":
      return {
        ...state,
        status: {
          value: "error",
          message: action.payload,
        },
      };
    case "movies/loaded":
      return {
        ...state,
        movies: action.payload,
        status: {
          ...state.status,
          value: "ready",
        },
      };
    case "movies/updated":
      return {
        ...state,
        movies: state.movies.map((task) =>
          task.id === action.payload.id ? action.payload : task,
        ),
        status: {
          ...state.status,
          value: "ready",
        },
      };
    case "initial":
      return {
        ...state,
        status: { ...initialState.status },
      };

    case "search":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "watchList/add":
      const updatedWatchList = [...state.watchList, action.payload];
      localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
      return {
        ...state,
        watchList: updatedWatchList,
      };
    case "watchList/remove":
      const filteredWatchList = state.watchList.filter(
        (movie) => movie.id !== action.payload,
      );
      localStorage.setItem("watchList", JSON.stringify(filteredWatchList));
      return {
        ...state,
        watchList: filteredWatchList,
      };
    default:
      throw new Error("Unknown Action Type");
  }
}

function TasksProvider({ children }) {
  const [{ movies, status, searchQuery, watchList }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    async function fetchPopularMovies() {
      dispatch({ type: "loading" });
      let response = null;
      try {
        if (searchQuery.length < 3) {
          response = await fetch(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
          );
        } else {
          response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}&language=en-US&page=1`,
          );
        }

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.results);

        dispatch({ type: "movies/loaded", payload: data.results });
      } catch (error) {
        console.error("Error fetching movies:", error);
        dispatch({ type: "error", payload: error });
      }
    }
    fetchPopularMovies();
  }, [searchQuery]);

  const handleSearch = (query) => {
    dispatch({ type: "search", payload: query });
  };

  const addToWatchList = (movie) => {
    dispatch({ type: "watchList/add", payload: movie });
  };

  const removeFromWatchList = (movieId) => {
    dispatch({ type: "watchList/remove", payload: movieId });
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        status,
        searchQuery,
        watchList,
        handleSearch,
        addToWatchList,
        removeFromWatchList,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default TasksProvider;
