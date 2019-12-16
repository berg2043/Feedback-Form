import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Success=(props)=>{

  // Adds History
  let history = useHistory();

  return(
    <div>
      <h1>Thank You!</h1>
      <Button variant="contained" onClick={()=>history.push('/')}>Leave New Feedback</Button>
    </div>
  );
}

export default Success;