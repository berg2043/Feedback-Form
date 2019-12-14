import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Questions from '../Questions/Questions';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';

const App = (props)=> {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4><i>Don't forget it!</i></h4>
      </header>
      <br/>
      <Router>
        <Route exact path='/' render={(props)=>
          <Questions {...props} 
              reducerPath="ADD_FEELING" 
              question="How are you feeling today?" 
              placeholder="Feeling?"
              routerPath="/understanding"
              dValue="feeling"/>}
        />
        <Route path='/understanding' render={(props)=>
          <Questions {...props}
              reducerPath="ADD_UNDERSTANDING" 
              question="How are you understanding the content?" 
              placeholder="Understanding?"
              routerPath="/support"
              back="/"
              dValue="understanding"/>}
        />
        <Route path='/support' render={(props)=>
          <Questions {...props}
              reducerPath="ADD_SUPPORT" 
              question="How are you being supported today?" 
              placeholder="Support?"
              routerPath="/comments"
              back="understanding"
              dValue="support"/>}
        />
        <Route path='/comments' render={(props)=> <Comments {...props}/>}/>
        <Route path='/review' render={(props)=> <Review {...props}/>}/>
        <Route path='/thanks' render={(props)=> <Success {...props}/>}/>
      </Router>
    </div>
  );
};


export default App;
