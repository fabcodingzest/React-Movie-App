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
  padding: 2rem;
`;

const Logo = styled.div`
  & img {
    margin-right: 20px;
    width: 15vw;
  }
`;

function Header() {
  return (
    <div>
      <Heading>
        <Logo>
          <div>
            <img src={moviedb} alt="movie" />
          </div>
        </Logo>
        <h1>React Movie App</h1>
      </Heading>
    </div>
  );
}

export default Header;
