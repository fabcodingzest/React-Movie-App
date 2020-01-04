import React from "react";
import styled from "styled-components";
import moviedb from "../Constants/moviedb.svg";

const Heading = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 2rem;
`;

const Logo = styled.div`
  & img {
    margin-right: 20px;
    width: 15vw;
  }
`;

const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/550?api_key=c94f52c104c381e14f84ce1191dd71f1`;

function Header() {
  return (
    <div>
      <Heading>
        <Logo>
          <div>
            <img src={moviedb} />
          </div>
        </Logo>
        <h1>React Movie App</h1>
      </Heading>
    </div>
  );
}

export default Header;
