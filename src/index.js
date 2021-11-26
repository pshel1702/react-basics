import "bootstrap/dist/css/bootstrap.min.css"; //create react app uses webpack to handle css, will inject css into our application
import React from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
//reference to a function inside the element we're importing. creates a const called render that references react-dom's render function. 
//which renders our app.  
import App from "./components/App";

//render accepts two args
//render: set up entry point
render(
  <Router>
    <App/>
  </Router>, 
  document.getElementById("root")
);