import React, { component } from "react";
// import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import BookSearch from "../components/BookSearch";
import Results from "../components/Results";

class savedBook extends component {
  // Create state
  // state = {
  //   search: "",
  //   books: [],
  // }
  // Handle change in search bar and on click functions
  // handleInputChange = 

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
