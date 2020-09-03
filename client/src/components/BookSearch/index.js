import React from "react";
import "./style.css";

function BookSearch({ children }) {
  return (
    <div className="container">
      <div className="card bg-light">
        <div className="card-header bg-secondary text-white">
          <i className="fas fa-book"></i> Book Search
        </div>
        <div className="card-body">
          <h5 id="bookSearch" className="card-title">
            Book
          </h5>
          <input
            // value={this.state.value}
            // onChange={(e) => {
            //   this.handleChange(e);
            // }}
            id="field"
            type="book"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Timeline"
          />
          <a
            // onClick={this.handleClick.bind(this)}
            id="search"
            href="#"
            Î
            className="btn btn-danger"
          >
            Search
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookSearch;
