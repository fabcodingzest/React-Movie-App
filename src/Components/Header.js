import React from "react";
import styled from "styled-components";
import moviedb from "../Constants/moviedb.svg";

const Heading = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 1rem;
`;

const Logo = styled.div`
  & img {
    margin-right: 20px;
    width: 8vw;
  }
`;

function Header() {
  return (
    <Heading>
      <div>
        <Logo>
          <div>
            <img src={moviedb} alt="movie" />
          </div>
        </Logo>
      </div>
      <div>
        <h1>React Movie App</h1>
      </div>
    </Heading>
  );
}

export default Header;
