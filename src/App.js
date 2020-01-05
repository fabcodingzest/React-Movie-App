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
      console.log(movie.data.results);
      setMovies(movie.data.results);
      setLoading(false);
    }
    getMovieData();
  }, []);

  const search = async searchValue => {
    setLoading(true);
    setErrorMessage(null);

    async function searchMovie() {
      const searchResult = await axios.get(`https://www.omdbapi.com/search`);
    }
  };
  return (
    <div className="App">
      <Header />
      <Search />
      <div className="movies">
        {movies.map((movie, index) => (
          <Movie key={`${index}-${movie.Title}`} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
