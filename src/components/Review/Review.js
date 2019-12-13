import React, {useStore} from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

const Review = (props) => {
  
  // Sends feedback to server
  function submit(){
    postFeedback(props.feedback)
  }

  // Sends feedback to server
  function postFeedback(payload){
    Axios.post('/feedback', payload).then(response=>{
      console.log('success');
    }).catch(err=>{
      console.log(err);
    });
  }

  return (
    <div>
      <p>Feelings: {props.feedback.feeling}</p>
      <p>Understanding: {props.feedback.understanding}</p>
      <p>Support: {props.feedback.support}</p>
      <p>Comments: {props.feedback.comments}</p>
      <button onClick={submit}>Submit</button>
    </div>
  )
};

const storeOnProps=(reduxStore)=>({feedback: reduxStore.feedbackReducer})
export default connect(storeOnProps)(Review)