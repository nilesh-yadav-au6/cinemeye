import React from 'react';
import './App.css';
import { HashRouter, Switch ,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import TvseriesPage from "./components/TvseriesPage"


function App() {
  return (
    <div className="App">
        <Navbar />
        <HashRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/tvseries" component={TvseriesPage} />
        </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
