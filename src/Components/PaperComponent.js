import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import ProgressBar from "react-bootstrap/ProgressBar";

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
    marginBottom: "20px",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  title: {
    fontFamily: "Georgia",
    fontWeight: "bold",
    fontSize: "35px"
  },
  content: {
    fontFamily: "Georgia",
    marginTop: "15px",
    fontSize: "20px"
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.desktop}>
        <center>
          <Paper className={classes.root}>
            <div className={classes.title}>Witaj w supporter!</div>
            <div className={classes.content}>
              Jeżeli chcesz wspomóc akcję kliknij na jej kartę lub na kartę z
              trzema kropkami aby zobaczyć więcej akcji w tej kategorii.
            </div>
          </Paper>
        </center>
      </div>
      <div className={classes.mobile}>
        <center>
          <Paper className={classes.root}>
            <div className={classes.title}>Witaj w supporter!</div>
            <div className={classes.content}>
              Jeżeli chcesz wspomóc akcję kliknij na jej kartę lub na kartę z
              trzema kropkami aby zobaczyć więcej akcji w tej kategorii.
            </div>
          </Paper>
        </center>
      </div>
    </div>
  );
}
