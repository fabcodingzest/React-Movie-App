import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    `https://image.tmdb.org/t/p/w500${movie.poster_path}` === "N/A"
      ? DEFAULT_PLACEHOLDER_IMAGE
      : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className="movie">
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.original_title}`}
          src={poster}
        />
      </div>
      <h3>{movie.original_title}</h3>
      <h5 width="200px">{movie.Title}</h5>
      <p>({movie.release_date})</p>
    </div>
  );
};
export default Movie;
