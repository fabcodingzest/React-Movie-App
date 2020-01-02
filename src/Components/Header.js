import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Input = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;

  & input {
    padding: 10px;
    border-radius: 100px;
    border: 1px solid grey;
    width: 500px;
    outline: none;
  }
`;

function Header() {
  return (
    <div>
      <Heading>
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
