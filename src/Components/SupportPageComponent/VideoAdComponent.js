import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import ReactPlayer from "react-player";

import Fab from "@material-ui/core/Fab";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  button: {
    marginRight: "20px",
    fontWeight: "bold",
    fontFamily: "Georgia",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px",
      marginTop: "10px"
    }
  },
  dialog: {}
}));

export default function VideoAdComponent() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [play, setPlay] = React.useState(false);
  const [videoEnded, setVideoEnded] = React.useState(false);

  const onFocus = () => {
    console.log("open" + open);
    if (open) {
      setPlay(true);
    }
    
    console.log("open2" + open);
    if (!open) {
      setPlay(false);
    }
  };

  const onBlur = () => {
    setPlay(false);
  };

  useEffect(() => {
    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
  });

  const handleClickOpen = () => {
    setOpen(true);
    setPlay(true);
  };

  const handleClose = useCallback(
    (event) => {
      setOpen(false);
      setPlay(false);
    },
    [setOpen, setPlay]
  );
 
  const handleOnEnd = () => {
    setOpen(false);
    setVideoEnded(true);
  };

  const handleClickPlayPause = () => {
    setPlay(!play);
  };

  return (
    <span>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={handleClickOpen}
      >
        Obejrzyj Reklamy!
      </Button>
      <Dialog
        fullWidth
        className={classes.dialog}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Reklama"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {videoEnded ? (
              "Dziękujemy za obejrzenie filmu! Na rzecz zbierającego przekazano 10gr."
            ) : (
              <div>
                <ReactPlayer
                  playing={play}
                  url="http://media.w3.org/2010/05/sintel/trailer.mp4"
                  width="100%"
                  height="100%"
                  // controls={true}
                  onEnded={handleOnEnd}
                />
                <center>
                <Fab color={play ? "secondary" : "primary"} aria-label="edit" onClick={handleClickPlayPause}>
                  {play ?
                  (
                    <PauseCircleOutlineIcon/>
                  )
                :
                (
                  <PlayCircleOutlineIcon />
                  )
                }
                </Fab>
                </center>
              </div>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Anuluj
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  );
}
