import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginLeft: "auto",
      marginRight: "auto",
      width: 500,
    },
  },
}));

const Comments = (props) => {
  // adds dispatch
  const dispatch = useDispatch();

  // Gets value from reducer
  const prevComment = useSelector(store=> store.feedbackReducer.comment)

  // Hooks
  const [comment, setComment] = useState('');

  // Updates field to prvious value when comonent mounts or updates
  useEffect(()=>{
    setComment(prevComment)
  }, [prevComment])

  // Updates hook dynamically as user types in form
  function commentForm(event){
    setComment(event.target.value);
  }
  
  // Sends comments to reducer
  function submitComment(event){
    event.preventDefault();
    dispatch({type: "ADD_COMMENTS", payload: comment});
    props.history.push('/review');
  }

  const classes = useStyles();

  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <form onSubmit={submitComment} className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <TextField
                type="text"
                variant="filled"
                value={comment} 
                onChange={commentForm} 
                label="Comments"
                multiline
                />
          </Grid>
          <Grid item>
            <Button onClick={()=>props.history.push('./support')} variant="contained" color="secondary">Back</Button>
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">Next</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
};

export default Comments;