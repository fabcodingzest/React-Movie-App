import React, { useState } from "react";

const Search = props => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInput = e => {
    setSearchValue(e.target.value);
  };
  const resetInputField = e => {
    searchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };
  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInput}
        type="text"
        placeholder="Search for a Movie"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};
export default Search;
