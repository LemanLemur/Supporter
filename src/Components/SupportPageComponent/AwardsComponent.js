import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import supportData from "../Data/SupportData";
import { Divider, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  avatarImg: {
    marginTop: "15px",
    width: "30%",
    height: "30%",
    borderRadius: "60%"
  },
  title: {
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "20px",
    fontFamily: "Georgia"
  },
  paper: {
    marginTop: "15px",
    marginBottom: "15px"
  },
  awardsGoal: {
    marginLeft: "10px",
    marginTop: "5px",
    marginBottom: "5px",
    fontSize: "20px",
    fontFamily: "Georgia",
    textDecoration: "bold"
  },
  awardsContent: {
    marginTop: "5px",
    marginBottom: "5px",
    fontFamily: "Georgia",
  }
}));

export default function Awards(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <center>
        <Typography color="secondary" className={classes.title}>
          {supportData[props.id].awardsTitle}
        </Typography>
      </center>

      {supportData[props.id].awards.map(data => (
        <Paper className={classes.paper}>
          <Typography color="primary" className={classes.awardsGoal}>
            {data.goal} zł
          </Typography>
          <Divider variant="middle"/>
          <center>
            <div className={classes.awardsContent}>{data.content}</div>
            <Divider/>
          </center>
        </Paper>
      ))}
    </div>
  );
}
