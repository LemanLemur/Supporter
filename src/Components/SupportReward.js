import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import data from './Data/SupportData';
import { Divider, Paper, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  avatarImg: {
    marginTop: "15px",
    width: "30%",
    height: "30%",
    borderRadius: "60%",
  },
  name: {
    marginTop: "20px",
    fontSize: "20px",
    fontFamily: "Georgia",
    // color: "#3f51b5",
  },
  auth: {
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "14px",
    fontFamily: "Georgia",
  }
}));

export default function UserInfo(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {data[props.id].map(data => (

        ))}
    </div>
  );
}

