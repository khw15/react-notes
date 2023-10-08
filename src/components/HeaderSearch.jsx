import React from "react";

const SearchBar = ({ onSearch }) => {
    const onSearchBarChange = (event) => {
        onSearch(event.target.value);
    }

    return (
        <div className="note-search">
            <input
                type="text"
                placeholder="Search Your Notes..."
                onChange={onSearchBarChange}
            />
        </div>
    );
}

export default SearchBar;
