import React, {useStore} from 'react';
import { connect } from 'react-redux';

const Review = (props) => {
  
  // Sends feeling to reducer
  // function submitInput(event){
  //   event.preventDefault();
  //   props.dispatch({type: props.reducerPath, payload: input})
  // }

  return (
    <div>
      <p>Feelings: {props.feedback.feeling}</p>
      <p>Understanding: {props.feedback.understanding}</p>
      <p>Support: {props.feedback.support}</p>
      <p>Comments: {props.feedback.comments}</p>
    </div>
  )
};

const storeOnProps=(reduxStore)=>({feedback: reduxStore.feedbackReducer})
export default connect(storeOnProps)(Review)