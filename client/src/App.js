import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Google Books Search</h1>
          <p className="lead">Search Books and Save Books of Interest</p>
        </div>
      </div>
      <Switch>
        <Route exact path={[`/search`, '/']} >
          <Search />
        </Route>
        <Route exact path={[`/saved`, '/']} >
          <Saved />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
