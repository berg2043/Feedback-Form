import React, {useState} from 'react';
import { connect } from 'react-redux';

const Questions = (props) => {
  // Hooks
  const [input, setInput] = useState('');

  // Updates hook dynamically as user types in form
  function inputForm(event){
    setInput(event.target.value);
  }
  
  // Sends input to reducer
  function submitInput(event){
    event.preventDefault();
    props.dispatch({type: props.reducerPath, payload: input});
    props.history.push(props.routerPath);
  }

  return (
    <div>
      <h1>{props.question}</h1>
      <form onSubmit={submitInput}>
        <input 
            required
            min={0} 
            max={5} 
            type="number"
            value={input} 
            onChange={inputForm} 
            placeholder={props.placeholder}
            />
        <button>Next</button>
      </form>
      {props.back
        ? <button onClick={()=>props.history.push(props.back)}>Back</button>
        : null}
    </div>
  )
};

const storeOnProps=(reduxStore)=>({feedback: reduxStore.feedbackReducer});
export default connect(storeOnProps)(Questions);