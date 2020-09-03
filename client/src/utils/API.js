import axios from "axios";
const BookURL = "https://www.googleapis.com/auth/books";

// Export an object containing methods we'll use for accessing the Random User API
export default {
  getBooks: function () {
    return axios.get(BookURL);
  },

  getIndividualBook: function () {
    return axios.get("/api/books");
  },

  getBookId: function (id) {
    return axios.get("/api/books" + id);
  },

  saveBook: function (savedBook) {
    return axios.get("/api/books", savedBook);
  },

  deleteBook: function (id) {
    return axios.get("/api/books" + id);
  },
};
