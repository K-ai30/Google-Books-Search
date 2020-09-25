import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Component/Navbar";
import SearchBook from "./pages/searchBook";
import SavedBook from "./pages/savedBook";
import NoMatch from "./pages/noMatch";

// import Jumbotron from "./components/Jumbotron";
// import BookSearch from "./pages/searchBook";
// import Results from "./components/Results";
// import savedBook from "./pages/savedBook";
// import searchBook from "./pages/searchBook";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
          <Navbar />
          {/* <Jumbotron /> */}
          {/* <BookSearch /> */}
          {/* <Results /> */}
        <Switch>
          <Route exact path="/"><SearchBook/></Route>
          <Route exact path="/saved"><SavedBook/></Route>
          <Route exact path="/saved/:id"><SavedBook/></Route>
          <Route><NoMatch/></Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;