import React from "react";
import "../styles/search.css";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="formu">
      <div></div>
      <form>
        <input
          type="text"
          placeholder="search by tag or title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
