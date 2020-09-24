import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import savedBook from "./pages/savedBook";
// import bookSearch from "./pages/bookSearch";

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

import "./App.css";

function App() {
  return (
    // <Router>
    //   <div>
    <div>
        <Navbar />
        <Jumbotron />
    </div>
    //     <Switch>
    //       <Route exact path="/" component={bookSearch} />
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;