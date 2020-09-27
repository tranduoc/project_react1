import React from "react";

import "./App.css";
import Home from "./component/Home";
import Search from "./component/Search";
import StatelessComponent from "./component/StatelessComponent";

function App() {
  return (
    <div className="container">
      <Home />
      <div className="container">
        <Search />
        <StatelessComponent />
      </div>
    </div>
  );
}

export default App;
