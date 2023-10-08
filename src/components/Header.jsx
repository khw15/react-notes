import React from "react";
import SearchBar from "./HeaderSearch";

const Header = ({ onSearch }) => {
    return (
        <div className="notes-app__header">
            <h1>Dicatatin</h1>
            <SearchBar onSearch={onSearch} />
        </div>
    );
}

export default Header;