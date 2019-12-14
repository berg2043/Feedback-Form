import React from 'react';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


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
  
  const feedback = useSelector(store=> store.feedbackReducer)

  // Sends feedback to server
  function submit(){
    postFeedback(feedback);
    props.history.push('/thanks')
  }

  // Sends feedback to server
  function postFeedback(payload){
    Axios.post('/feedback', payload).then(response=>{
      console.log('success');
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
      <Button onClick={submit} variant="contained" color="primary">Submit</Button>
      <Button onClick={()=>props.history.push('/comments')} variant="contained" color="secondary">Back</Button>
    </div>
  )
};

export default Review;