import React, { Component} from 'react';
import { FacebookProvider, Share, ShareButton } from 'react-facebook';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { width } from '@material-ui/system';
 
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "25px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  socialImg: {
    height: "12%",
    width: "12%",
    marginRight: "5px",
  }
}));

export default function ShareFb(props) {
  
  const classes = useStyles();

    return (
      <div className={classes.root}>
      <center>
        {/* <Typography color="secondary">Udostępnij tę akcję!</Typography>
        <br></br> */}
      <img className={classes.socialImg} src="https://image.flaticon.com/icons/svg/174/174848.svg"/>
      <FacebookProvider appId="2404865756278315">
        <Share href={props.url}>
          {({ handleClick, loading }) => (
              <Button variant="outlined" color="primary" size="large" onClick={handleClick}>Udostępnij</Button>
          )}
        </Share>
      </FacebookProvider>
        </center>
      </div>
    );
}