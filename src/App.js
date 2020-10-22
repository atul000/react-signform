import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import pdf from "./components/pdf";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/video" component={Video} />
        <Route exact path="/pdf" component={pdf} />
      </Switch>
    </Router>
  );
};

export default App;
