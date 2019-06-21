import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/layout/header";
import Navbar from "./components/layout/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./reset.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
