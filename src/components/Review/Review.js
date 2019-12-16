import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: "auto",
      marginBottom: theme.spacing(1),
      width: 200,
    },
  },
}));

const Review = (props) => {
  // Adds dispatch
  const dispatch = useDispatch();

  // Gets info from reducer
  const feedback = useSelector(store=> store.feedbackReducer)

  // Adds History
  let history = useHistory();

  // Sends feedback to server
  function submit(){
    postFeedback(feedback);
  }

  // Sends feedback to server
  function postFeedback(payload){
    Axios.post('/feedback', payload).then(response=>{
      dispatch({type: 'CLEAR_FEEDBACK'})
      history.push('/thanks')
    }).catch(err=>{
      console.log(err);
    });
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>Feelings: {feedback.feeling}</p>
      <p>Understanding: {feedback.understanding}</p>
      <p>Support: {feedback.support}</p>
      <p>Comments: {feedback.comments}</p>
      <Button onClick={()=>history.push('/comments')} variant="contained" color="secondary">Back</Button>
      <Button onClick={submit} variant="contained" color="primary">Submit</Button>
    </div>
  )
};

export default Review;