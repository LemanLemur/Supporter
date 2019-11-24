import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import users from "../Data/UserData";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Divider, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import PaymentMethodTabs from "./PaymentMethodTabs";

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
  avatarImg: {
    marginTop: "15px",
    width: "30%",
    height: "30%",
    borderRadius: "60%"
  },
  name: {
    marginTop: "20px",
    fontSize: "20px",
    fontFamily: "Georgia"
  },
  auth: {
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "14px",
    fontFamily: "Georgia"
  }
}));

export default function Payment() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <span>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleClickOpen}
      >
        Wesprzyj!
      </Button>
      <Dialog
        // className={classes.dialog}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Płatność"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            
            <PaymentMethodTabs></PaymentMethodTabs>
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Anuluj
          </Button>
          <Button onClick={handleClose} color="primary">
            Przejdź do płatności
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  );
}
