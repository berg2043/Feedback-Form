import React, {useState} from 'react';
import { connect } from 'react-redux';

const Understanding = (props) => {
  // Hooks
  const [understanding, setUnderstanding] = useState('')

  // Updates hook dynamically as user types in form
  function understandingForm(event){
    setUnderstanding(event.target.value);
  }
  
  // Sends understanding to reducer
  function submitunderstanding(event){
    event.preventDefault();
    props.dispatch({type: "ADD_UNDERSTANDING", payload: understanding})
  }

  return (
    <div>
      <h1>How are you understanding today?</h1>
      <form onSubmit={submitunderstanding}>
        <input 
            min={0} 
            max={5} 
            type="number"
            value={understanding} 
            onChange={understandingForm} 
            placeholder="understanding?"
            />
        <button>Next</button>
      </form>
    </div>
  )
};

export default connect()(Understanding)