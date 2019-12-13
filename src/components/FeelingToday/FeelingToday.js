import React, {useState} from 'react';
import { connect } from 'react-redux';

const FeelingToday = (props) => {
  // Hooks
  const [feeling, setFeeling] = useState('')

  // Updates hook dynamically as user types in form
  function feelingForm(event){
    setFeeling(event.target.value);
  }
  
  // Sends feeling to reducer
  function submitFeeling(event){
    event.preventDefault();
    props.dispatch({type: "ADD_FEELINGS", payload: feeling})
  }

  return (
    <div>
      <h1>How are you feeling today?</h1>
      <form onSubmit={submitFeeling}>
        <input 
            min={0} 
            max={5} 
            type="number"
            value={feeling} 
            onChange={feelingForm} 
            placeholder="Feeling?"
            />
        <button>Next</button>
      </form>
    </div>
  )
};

export default connect()(FeelingToday)