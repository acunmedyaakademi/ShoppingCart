import React from "react";

const Search = ({ searchQuery, handleSearch }) => {
  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={handleSearch}
        className="searchInput"
      />
    </div>
  );
};

export default Search;
