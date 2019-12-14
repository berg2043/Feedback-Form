import React, {useState, useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button, Grid} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  input: {
    width: 150,
  },
}));

const Questions = (props) => {
  // Adds dispatch
  const dispatch = useDispatch();

  // Gets value from reducer
  const feedback = useSelector(store=> store.feedbackReducer[[props.dValue]])
  
  // Hooks
  const [input, setInput] = useState('');

  // Updates field to prvious value when comonent mounts or updates
  useEffect(()=>{
    setInput(feedback)
  }, [feedback])

  // Updates hook dynamically as user types in form
  function inputForm(event){
    setInput(event.target.value);
  }
  
  // Sends input to reducer
  function submitInput(event){
    event.preventDefault();
    dispatch({type: props.reducerPath, payload: input});
    props.history.push(props.routerPath);
  }



  // Adds Styling
  const classes = useStyles();

  return (
    <div>
      <h1>{props.question}</h1>
      <form onSubmit={submitInput} className={classes.root} >
        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <TextField  
                variant="filled"
                required
                min={0} 
                max={5} 
                type="number"
                value={input} 
                onChange={inputForm} 
                label={props.placeholder}
                className={classes.input}
                autoFocus 
                />
            </Grid>
            <Grid item>
             {props.back
             ? <Button 
                  onClick={()=>props.history.push(props.back)}
                  variant="contained" color="secondary">
                    Back
              </Button>
            : null}
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary"> Next</Button>
          </Grid>
        </Grid>
      </form>
      
    </div>
  )
};

export default Questions;