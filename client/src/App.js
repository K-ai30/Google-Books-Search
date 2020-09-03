import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import bookSearch from "./pages/bookSearch";
// import savedBook from "./pages/savedBook";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={bookSearch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
