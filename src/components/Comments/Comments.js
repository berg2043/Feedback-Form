import React, {useState} from 'react';
import { connect } from 'react-redux';

const Comments = (props) => {
  // Hooks
  const [comment, setComment] = useState('')

  // Updates hook dynamically as user types in form
  function commentForm(event){
    setComment(event.target.value);
  }
  
  // Sends feeling to reducer
  function submitComment(event){
    event.preventDefault();
    props.dispatch({type: props.reducerPath, payload: comment})
  }

  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <form onSubmit={submitComment}>
        <input 
            value={comment} 
            onChange={commentForm} 
            placeholder="Comments"
            />
        <button>Next</button>
      </form>
    </div>
  )
};

export default connect()(Comments)