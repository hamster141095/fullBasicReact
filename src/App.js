import "./App.css";
import Header from "./Components/Header/Header";
import User from "./Components/User/User";
import Home from "./Components/Home/Home";

import React from "react";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header className="App-header">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/user" component={User} />
      </header>
    </div>
  );
};

export default App;
