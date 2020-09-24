import React from "react";
import "./style.css";

function Navbar({ children }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <h2 className="appName">Google Book Search</h2>
      </a>
      <div className="d-flex justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item" id="home">
            <a className="nav-link" href="/">
              <button type="button" id="searchBtn" className="btn btn-light text-black">
                Search
              </button>
            </a>
          </li>
          <li className="nav-item" id="report">
            <a className="nav-link" href="/saved">
              <button type="button" id="savedBtn" className="btn btn-light text-black">
                Saved
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
