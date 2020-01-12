import React, { useState } from "react";
import Header from "./Header";
import { useHistory } from "react-router-dom";

const Search = props => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInput = e => {
    setSearchValue(e.target.value);
  };
  const resetInputField = e => {
    setSearchValue("");
  };

  const history = useHistory();
  console.log(history.location.pathname);

  const callSearchFunction = e => {
    if (history.location.pathname !== "/") {
      history.push("/");
    }
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };
  return (
    <div>
      <Header />
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInput}
          type="text"
          placeholder="Search for a Movie"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    </div>
  );
};
export default Search;
