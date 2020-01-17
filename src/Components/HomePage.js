import React, { useEffect } from "react";
import Movie from "./Movie";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularMovies } from "../actions/api";
// import axios from "axios";
import "../App.css";

// const MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=c94f52c104c381e14f84ce1191dd71f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const HomePage = props => {
  const dispatch = useDispatch();

  const popularData = useSelector(state => state.movies, []) || [];
  // const [movies, setMovies] = useState(popularData);

  useEffect(() => {
    dispatch(fetchPopularMovies());
    
  }, [dispatch]);
  // const { movies, errorMessage, loading } = props;
  return (
    <div className="App">
      {/* <div className="movies">
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
      </div> */}
      {popularData.results &&
        popularData.results.map(movie => (
          <Movie movie={movie} key={movie.poster_path} />
        ))}
    </div>
  );
};

export default HomePage;
