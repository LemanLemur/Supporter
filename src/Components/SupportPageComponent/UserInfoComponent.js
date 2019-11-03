import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import users from '../Data/UserData';
import { Divider, Paper, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: "10px",
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
        <Paper>
        <center>

        <center><img src={users[props.id].avatar} className={classes.avatarImg} alt="avatar"/></center>

        <center><p className={classes.name}>{users[props.id].name}</p></center>

        <Divider light/>

        <Typography className={classes.auth} color="textSecondary">
        Organizator akcji został zwerfikowany:
        </Typography>
        { users[props.id].emailAuth ? (
             <Typography color="secondary"><CheckIcon/> Adresem e-mail</Typography>
         ) : (
             <Typography color="textSecondary"><CloseIcon/> Adresem e-mail</Typography>
         )}
        { users[props.id].idCardAuth ? (
             <Typography color="secondary"><CheckIcon/> Dowodem osobistym</Typography>
         ) : (
             <Typography color="textSecondary"><CloseIcon/> Dowodem osobistym</Typography>
         )}

        </center>
        </Paper>
    </div>
  );
}

