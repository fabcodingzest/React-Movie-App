import React from "react";
import Movie from "./Movie";
import "../App.css";

const HomePage = props => {
  const { movies, errorMessage, loading} = props;
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
