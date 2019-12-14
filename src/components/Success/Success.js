import React from 'react';
import { Button } from '@material-ui/core';

const Success=(props)=>{
  return(
    <div>
      <h1>Thank You!</h1>
      <Button variant="contained" onClick={()=>props.history.push('/')}>Leave New Feedback</Button>
    </div>
  );
}

export default Success;