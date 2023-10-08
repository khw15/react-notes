import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Search Your Notes..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
