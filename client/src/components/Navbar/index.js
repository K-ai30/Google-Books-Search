import React from "react";
import "./style.css";

function Navbar({ children }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="d-flex justify-content-end">
        <h3 id="appName">Google Books</h3>
        <button id="searchBtn" className="navbar-brand mb-0 h1">
          Search
        </button>
        <button id="savedBtn" className="navbar-brand mb-0 h1">
          Saved
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
