import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../Component/Jumbotron";
import BookSearch from "../Component/BookSearch";
import Results from "../Component/Results";
import { Container } from "../Component/Grid";

class searchBook extends Component {
  // Create state
  state = {
    search: "",
    books: [],
    // error: "",
    message: "",
  };
  // Handle change in search bar and on click functions
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  // Handles submit button on search for books card
  handleFormSubmit = (event) => {
    event.preventDefault();
    // Connect to Google Books API to find matching query
    API.getBooks(this.state.search).then((res) => {
      if (res.data.items === "error") {
        throw new Error(res.data.items);
      } else {
        let results = res.data.items;
        // Map through results array
        results = results.map((result) => {
          result = {
            key: result.id,
            id: result.id,
            title: result.volumeInfo.title,
            author: result.volumeInfo.author,
            description: result.volumeInfo.description,
            image: result.volumeInfo.imageLinks.thumbnail,
            link: result.volumeInfo.infoLink,
          };
          return results;
        });
        // this.setState({ books: results, err.items: "" })
      }
    });
    // .catch(err => this.setState({ error: err.items }));
  };

  handleSavedButton = (event) => {
    console.log(event);
    event.preventDefault();
    console.log(this.state.books);
    let savedBooks = this.state.books.filter(
      (book) => book.id === event.target.id
    );
    savedBooks = savedBooks[0];
    API.saveBook(savedBooks)
      .then(this.setState({ message: alert("Your book is saved") }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container>
        <Jumbotron />
        <BookSearch
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Results
          books={this.state.books}
          handleSavedButton={this.handleSavedButton}
        />
      </Container>
    );
  }
}

export default searchBook;
