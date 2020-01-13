import React, { useReducer, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import DetailPage from "./Components/DetailPage";
import axios from "axios";
import Search from "./Components/Search";

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
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getMovieData() {
      const movies = await axios.get(MOVIE_API_URL);
      dispatch({ type: "SEARCH_MOVIES_SUCCESS", payload: movies.data.results });
    }
    getMovieData();
  }, []);

  const search = async searchValue => {
    if (searchValue !== "") {
      dispatch({
        type: "SEARCH_MOVIES_REQUEST"
      });
    }

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
          type: "SEARCH_MOVIES_FALIURE",
          error: error.message
        });
      }
    }
    searchMovie();
  };

  const { movies, errorMessage, loading } = state;
  return (
    <div>
      <Search search={search} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomePage
              reducer={reducer}
              movies={movies}
              errorMessage={errorMessage}
              loading={loading}
              initialState={initialState}
            />
          )}
        />
        <Route
          exact
          path="/detail/:title/:id"
          render={routeProps => <DetailPage routeProps={routeProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;
