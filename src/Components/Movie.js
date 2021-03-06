import React from "react";
import { Link } from "react-router-dom";

const DEFAULT_PLACEHOLDER_IMAGE =
  "http://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available-737x1024.jpg";

const Movie = ({ movie }) => {
  const poster =
    `https://image.tmdb.org/t/p/w500${movie.poster_path}` ===
    `https://image.tmdb.org/t/p/w500null`
      ? DEFAULT_PLACEHOLDER_IMAGE
      : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className="movie">
      <Link to={`/detail/${movie.original_title}/${movie.id}`}>
        <div className="image-width">
          <img
            width="200"
            alt={`The movie titled: ${movie.original_title}`}
            src={poster}
          />
        </div>
        <h3>{movie.original_title}</h3>
        <p>({movie.release_date})</p>
      </Link>
    </div>
  );
};
export default Movie;
