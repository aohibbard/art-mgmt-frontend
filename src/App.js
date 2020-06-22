import React from 'react';
// import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component{
  render(){
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' /> 
        </div>
      </Router>
    );
  }
}