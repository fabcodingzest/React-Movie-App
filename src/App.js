import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Movie from "./Components/Movie";
import axios from "axios";
import "./App.css";

const MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=c94f52c104c381e14f84ce1191dd71f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function getMovieData() {
      const movie = await axios.get(MOVIE_API_URL);
      setMovies(movie.data.results);
      setLoading(false);
    }
    getMovieData();
  }, []);

  const search = async searchValue => {
    setLoading(true);
    setErrorMessage(null);

    async function searchMovie() {
      try {
        const searchResult = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c94f52c104c381e14f84ce1191dd71f1&query=${searchValue}
      `);
        setMovies(searchResult.data.results);
        setLoading(false);
      } catch (error) {
        setErrorMessage(error);
        setLoading(false);
      }
    }
    searchMovie();
  };
  return (
    <div className="App">
      <Header />
      <Search search={search} />
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
