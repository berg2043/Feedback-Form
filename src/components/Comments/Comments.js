import React, {useState} from 'react';
import { connect } from 'react-redux';

const Comments = (props) => {
  // Hooks
  const [comment, setComment] = useState('');

  // Updates hook dynamically as user types in form
  function commentForm(event){
    setComment(event.target.value);
  }
  
  // Sends comments to reducer
  function submitComment(event){
    event.preventDefault();
    props.dispatch({type: "ADD_COMMENTS", payload: comment});
    props.history.push('/review');
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
      <button onClick={()=>props.history.push('./support')}>Back</button>
    </div>
  )
};

export default connect()(Comments);