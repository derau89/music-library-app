import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Header as StyledHeader, Title, SearchForm } from "./styles";
import { fetchSongs } from "../../Redux/slices/searchSlice";

function Header({ appName, setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const term = inputValue.trim();
    if (!term) return;

    setSearchTerm(term);
    dispatch(fetchSongs(term));
  };

  return (
    <StyledHeader>
      <Title>{appName}</Title>

      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search for music..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Search</button>
      </SearchForm>
    </StyledHeader>
  );
}

export default Header;