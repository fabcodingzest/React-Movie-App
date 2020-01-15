import React, { useEffect, useReducer } from "react";
import Movie from "./Movie";
import axios from "axios";
import "../App.css";

const MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=c94f52c104c381e14f84ce1191dd71f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const HomePage = props => {
  // const [state, dispatch] = useReducer(props.reducer, props.initialState);
  // useEffect(() => {
  //   async function getMovieData() {
  //     const movies = await axios.get(MOVIE_API_URL);
  //     dispatch({
  //       type: "SEARCH_MOVIES_SUCCESS",
  //       payload: movies.data.results
  //     });
  //   }
  //   getMovieData();
  // }, []);
  const { movies, errorMessage, loading } = props;
  return (
    <div className="App">
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

export default HomePage;
