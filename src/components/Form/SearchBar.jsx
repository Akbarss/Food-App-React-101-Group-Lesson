import React from "react";

const SearchBar = ({ handleSubmit, query, isLoading, setQuery }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} disabled={isLoading} onChange={() => setQuery(event.target.value)} />
    </form>
  );
};

export default SearchBar;
