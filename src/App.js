import React, { useState, useEffect, useReducer } from "react";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Movie from "./Components/Movie";
import axios from "axios";
import "./App.css";

const MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=c94f52c104c381e14f84ce1191dd71f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FALIURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getMovieData() {
      const movies = await axios.get(MOVIE_API_URL);
      console.log(movies);
      dispatch({ type: "SEARCH_MOVIES_SUCCESS", payload: movies.data.results });
    }
    getMovieData();
  }, []);

  const search = async searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    async function searchMovie() {
      try {
        const searchResult = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c94f52c104c381e14f84ce1191dd71f1&query=${searchValue}
      `);
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: searchResult.data.results
        });
      } catch (error) {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          error: error
        });
      }
    }
    searchMovie();
  };
  const { movies, errorMessage, loading } = state;
  return (
    <div className="App">
      <Header />
      <Search search={search} />
      <div className="movies">
        {loading && !errorMessage ? (
          <span className="load">loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : movies === [] ? (
          <h1>No Movie Found</h1>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.original_title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
