import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FlagIcon from '@material-ui/icons/Flag';
import DeleteIcon from '@material-ui/icons/Delete';
import Axios from 'axios';


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 400,
    maxWidth: 800,
    margin: 'auto'
  },
  flagged: {
    backgroundColor: 'red'
  }
});

const Admin = (props) => {
  const classes = useStyles();

  // Holder for all the feedback
  const [feedbackList, setFeedbackList] = useState([]);
  
  // Updates feedback table on load
  useEffect(()=>{
    getFeedback()
  }, [])

  // Gets list of feedback from server
  function getFeedback(){
    Axios.get('/feedback').then(response=>{
      setFeedbackList(response.data);
    }).catch(err=>{
      console.log(err);
    })
  }

  // Deletes an item of feedback from sever
  function deleteRow(id){
    if(window.confirm('Are you sure you want to delete this?')){
      Axios.delete('/feedback/'+id).then(response=>{
        getFeedback();
      }).catch(err=>{
        console.log(err);
      });
    }
  }

  // Updates item of feedback to flag it
  function putRow(id){
    Axios.put('/feedback/'+id).then(response=>{
      getFeedback();
    }).catch(err=>{
      console.log(err);
    })
  }

  return(
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <StyledTableCell>Feeling</StyledTableCell>
          <StyledTableCell>Comprehension</StyledTableCell>
          <StyledTableCell>Support</StyledTableCell>
          <StyledTableCell>Comments</StyledTableCell>
          <StyledTableCell>Delete</StyledTableCell>
          <StyledTableCell>Flag</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {feedbackList.map((row)=>{
          return (
          <TableRow key={row.id} className={(row.flagged)? classes.flagged:null}>
            <StyledTableCell component="th" scope="row">{row.feeling}</StyledTableCell>
            <StyledTableCell>{row.understanding}</StyledTableCell>
            <StyledTableCell>{row.support}</StyledTableCell>
            <StyledTableCell>{row.comments}</StyledTableCell>
            <StyledTableCell>
              <IconButton 
                  aria-label="delete" 
                  className={classes.margin}
                  onClick={()=>deleteRow(row.id)}
              >
                <DeleteIcon />
              </IconButton>
            </StyledTableCell>
            <StyledTableCell>
            <IconButton 
                  aria-label="flag" 
                  className={classes.margin}
                  onClick={()=>{putRow(row.id)}}
              >
                <FlagIcon />
              </IconButton>
            </StyledTableCell>
          </TableRow>
        )})}
      </TableBody>
    </Table>
  )
}

export default Admin;