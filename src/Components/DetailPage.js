import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
// import { useHistory } from "react-router-dom";

const DEFAULT_PLACEHOLDER_IMAGE =
  "http://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available-737x1024.jpg";
const Image = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 3em;
  align-self: flex-start;
`;
const Details = styled.div`
  height: 60vh;
  display: flex;
  margin-right: 3em;
  align-items: flex-start;
`;
const Container = styled.div`
  display: flex;
  margin: 1.5em;
`;

function DetailPage(props) {
  const { title, id } = props.routeProps.match.params;
  const [detail, setDetails] = useState({});
  const MOVIE_DETAIL_API = `https://api.themoviedb.org/3/movie/${id}?api_key=c94f52c104c381e14f84ce1191dd71f1&language=en-US`;

  useEffect(() => {
    const getMovieData = async () => {
      const movie = await axios.get(MOVIE_DETAIL_API);
      setDetails(movie.data);
    };
    // console.log("Inside UseEffect");
    getMovieData();
  }, [MOVIE_DETAIL_API]);

  // console.log(detail);
  // const history = useHistory();
  // console.log(history);    
  const poster =
    `https://image.tmdb.org/t/p/w300/${detail.poster_path}` ===
    `https://image.tmdb.org/t/p/w300/null`
      ? DEFAULT_PLACEHOLDER_IMAGE
      : `https://image.tmdb.org/t/p/w300/${detail.poster_path}`;
  return (
    <Container>
      <div>
        <Image>
          <div>
            <img
              alt={`The movie titled: ${detail.original_title}`}
              src={poster}
            />
          </div>
        </Image>
      </div>
      <Details>
        <div>
          <h1>{title}</h1>
          <h3>{detail.tagline}</h3>
          <br />
          <div className="Overview">{detail.overview}</div>
          <br />
          <h5>{detail.release_date}</h5>
        </div>
      </Details>
    </Container>
  );
}
export default DetailPage;
