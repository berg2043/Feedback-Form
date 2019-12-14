import React from 'react';
import { connect } from 'react-redux';
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
  
  // Sends feedback to server
  function submit(){
    postFeedback(props.feedback);
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
      <p>Feelings: {props.feedback.feeling}</p>
      <p>Understanding: {props.feedback.understanding}</p>
      <p>Support: {props.feedback.support}</p>
      <p>Comments: {props.feedback.comments}</p>
      <Button onClick={submit} variant="contained" color="primary">Submit</Button>
      <Button onClick={()=>props.history.push('/comments')} variant="contained" color="secondary">Back</Button>
    </div>
  )
};

const storeOnProps=(reduxStore)=>({feedback: reduxStore.feedbackReducer});
export default connect(storeOnProps)(Review);