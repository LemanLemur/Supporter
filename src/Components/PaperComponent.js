import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ProgressBar from 'react-bootstrap/ProgressBar'

const useStyles = makeStyles(theme => ({
  mobile: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  desktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  root: {
    padding: theme.spacing(3, 2),
    width: "75%",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  typeTitle: {
    marginLeft: "100px",
    marginRight: "100px",
    marginBottom: "25px"
  },
  type: {
    marginLeft: "100px",
    marginRight: "100px",
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
    <div className={classes.desktop}>
      <center>
      <Paper className={classes.root}>
          <Typography variant="h4">Witaj w supporter!</Typography>
          <Typography variant="h6">Jeżeli chcesz wspomóc akceję kliknij na ikonę dolara aby zostać przekierowany do jej strony.</Typography>
      </Paper>
      </center>
    </div>
    <div className={classes.mobile}>
    <center>
    <Paper className={classes.root}>
        <Typography variant="h6">Witaj w supporter!</Typography>
        <Typography variant="h7">Jeżeli chcesz wspomóc akceję kliknij na ikonę dolara aby zostać przekierowany do jej strony.</Typography>
    </Paper>
    </center>
  </div>
  </div>
  );
}