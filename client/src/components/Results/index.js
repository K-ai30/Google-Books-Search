import React from "react";
import "./style.css";

const Results = props => {
  return (
    <div className="container">
      <div className="card bg-light">
        <div className="card-header bg-secondary text-white">Results</div>
        <div className="card-body">
          <h5 id="results" className="card-title">
            Search for A Book to Begin!
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Results;
