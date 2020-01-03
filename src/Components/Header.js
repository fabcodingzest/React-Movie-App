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
const Input = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: black;
  margin-top: 2rem;

  & input {
    padding: 15px;
    border-radius: 100px;
    border: 2px solid grey;
    width: 700px;
    outline: none;
  }
`;
const Logo = styled.div`
  & img {
    margin-right: 20px;
    width: 5vw;
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
      <Input>
        <div>
          <input placeholder="Search for a Movie"></input>
        </div>
      </Input>
    </div>
  );
}

export default Header;
