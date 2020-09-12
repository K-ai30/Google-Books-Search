import axios from "axios";
const BookURL = "https://www.googleapis.com/auth/books";

// Export an object containing methods we'll use for accessing the Random User API
export default {
  // Gets all books from Google search
  getBooks: function (query) {
    return axios.get(BookURL + query);
  },
  // Gets all books
  getIndividualBook: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBookId: function (id) {
    return axios.get("/api/books" + id);
  },
  // Saves the book to the database
  saveBook: function (savedBook) {
    return axios.get("/api/books", savedBook);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.get("/api/books" + id);
  },
};