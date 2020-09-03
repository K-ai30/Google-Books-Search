import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import BookSearch from "../components/BookSearch";
import Results from "../components/Results";

class savedBook extends Component {
  // Create state

  // Handle change in search bar and on click functions

  render() {
    return (
      <div>
        <Jumbotron />
        <BookSearch />
        <Results />
      </div>
    );
  }
}

export default savedBook;
