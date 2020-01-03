import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "50%",
    marginTop: "50px",
  },
  mainDiv:{
    marginTop: "80px"
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function FormDialog() {
  const classes = useStyles();

  return (
    <div>
      <Link to="/home"><Button variant="outlined" size="large" color="primary" className={classes.margin}>
        Strona Główna
      </Button></Link>
    </div>
  );
}

export default function SignOutPage() {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
        <center>
            <Paper className={classes.root}>
        <Typography variant="h3"><ExitToAppIcon fontSize="large"></ExitToAppIcon></Typography>
      <Typography variant="h2">Wylogowano pomyślnie!</Typography>
      <p><p></p></p>
        <FormDialog></FormDialog>
            </Paper>
            <div>
        
      </div>
        </center>
    </div>
  );
}