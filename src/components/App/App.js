import React from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Questions from '../Questions/Questions';

const App = (props)=> {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4><i>Don't forget it!</i></h4>
      </header>
      <br/>
      <Router>
        <Questions reducerPath="ADD_FEELING" question="How are you feeling today?" placeholder="Feeling?"/>
        <Questions reducerPath="ADD_UNDERSTANDING" question="How are you understanding the content?" placeholder="Understanding?"/>
        <Questions reducerPath="ADD_SUPPORTED" question="How are you being supported today?" placeholder="Support?"/>
        
      </Router>
    </div>
  );
};


export default connect()(App);
