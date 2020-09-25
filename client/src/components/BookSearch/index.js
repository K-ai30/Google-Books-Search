import React from "react";
import "./style.css";

const BookSearch = props => {
  return (
    <div className="container">
      <div className="card bg-light">
        <div className="card-header bg-secondary text-white">
          <i className="fas fa-book"></i> Search For Book
        </div>
        <div className="card-body">
          <h5 id="bookSearch" className="card-title">
            By Title
          </h5>
          <input
            className="form-control"
            id="field"
            value={props.search}
            type="text"
            name="searchBook"
            placeholder="Enter Book's Title"
            onChange={props.handleInputChange}
          />
          <button
            className="btn btn-danger"
            id="search"
            type="submit"
            onClick={props.handleFormSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookSearch;
