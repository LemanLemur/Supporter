import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PaperSheet from './PaperComponent';
import SingleLineGridList from './HomeListGrid';
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
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Link to="/home"><Button variant="outlined" size="large" color="primary" className={classes.margin}>
        Strona Główna
      </Button></Link>
      <Button variant="outlined" size="large" color="primary" className={classes.margin} onClick={handleClickOpen}>
        Zaloguj
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Logowanie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Podaj swój login i hasło aby się zalogować.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="Login"
            label="Login"
            fullWidth
          />
          <TextField
            margin="dense"
            id="Hasło"
            label="Hasło"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleClose} color="primary">
            Zaloguj
          </Button>
        </DialogActions>
      </Dialog>
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