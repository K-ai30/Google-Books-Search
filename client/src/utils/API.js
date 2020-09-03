import axios from "axios";
const BookURL = "https://www.googleapis.com/auth/books";

// Export an object containing methods we'll use for accessing the Random User API
export default {
  getBooks: function () {
    return axios.get(BookURL);
  },
};