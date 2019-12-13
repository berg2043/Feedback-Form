import React from 'react';

const Success=(props)=>{
  return(
    <div>
      <h1>Thank You!</h1>
      <button onClick={()=>props.history.push('/')}>Leave New Feedback</button>
    </div>
  );
}

export default Success;