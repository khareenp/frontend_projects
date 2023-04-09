import { useEffect, useState } from "react";
import axios from "axios";
import searchIcon from "./search.svg";

import "./App.css";
import MovieCard from "./MovieCard";

// keycode: ef81a621
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(movies);

  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=ef81a621";

  // const searchMovies = async (title) => {
  //   const response = await fetch(`${API_URL}&s=${title}`);
  //   const data = await response.data;
  //   console.log(response);
  // };

  async function searchMovies(title) {
    try {
      const response = await axios.get(`${API_URL}&s=${title}`);
      const data = response.data.Search;
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
