import React from "react";
import "./style.css";
// import CardBody from '../CardBody';

function SavedBooks(props) {
  return (
    <div className="container">
      <div className="card bg-light">
        <div className="card-header bg-secondary text-white">
          <i className="fas fa-download"></i> Saved Books
        </div>
        <div className="card-body">
          {/* <CardBody/> */}
          <div className="row">
            <div id="border" className="card-body clearfix">
              <h4 id="title">Harry Potter and The Sorcerer's Stone</h4>
              <h6 id="author">Written by J. K. Rowling</h6>
              <div>
                <button id="view" className="btn bg-secondary">
                  View
                </button>
                <button id="delete" className="btn bg-danger">
                  <i class="fas fa-trash-alt"></i> Delete
                </button>
              </div>
              <div>
                <img id="pictureBook" alt=" " />
                <p id="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedBooks;
