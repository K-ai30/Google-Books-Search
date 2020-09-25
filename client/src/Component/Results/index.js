import React from "react";
import "./style.css";
import { Row, Col } from "../Grid";

const Results = (props) => {
  return (props) ? (
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
  ) : (
    <div className="container">
      <div className="card bg-light">
        <div className="card-header bg-secondary text-white">Results</div>
        <div className="card-body">
          <h5 id="results" className="card-title">
            <Row>
              <Col>
                <img alt=""></img>
              </Col>
              <Col>

              </Col>
                <Row>
                  <h2>book title</h2>
                </Row>
                <Row>
                  
                </Row>
                <Row>
                  
                </Row>
            </Row>
          </h5>
        </div>
      </div>
    </div>
  )
};

export default Results;
