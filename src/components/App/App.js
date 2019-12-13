import React from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import FeelingToday from '../FeelingToday/FeelingToday';

const App = (props)=> {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4><i>Don't forget it!</i></h4>
      </header>
      <br/>
      <Router>
        <FeelingToday/>
      </Router>
    </div>
  );
};


export default connect()(App);
