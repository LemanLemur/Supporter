import React, { useState, useEffect, useCallback } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import TemporaryDrawer from "./HamburgerMenu";
import Button from "@material-ui/core/Button";

import Snackbar from "@material-ui/core/Snackbar";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import WarningIcon from "@material-ui/icons/Warning";
import { amber, green } from "@material-ui/core/colors";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import clsx from "clsx";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Cookies from "js-cookie";
import usersData from './Data/UserData';

// import * as firebaseui from 'firebaseui'
// import 'firebase/auth';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  inputRoot: {
    color: "inherit"
  },
  paper: {
    color: "black",
    padding: theme.spacing(3, 2),
    width: "100%"
  },
  navLink: {
    color: "inherit",
    textDecoration: "none"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  logoImg: {
    height: "50px",
    width: "200px"
  }
}));

var UserData = Cookies.getJSON("UserData");

/////////////SNACKBAR////////////

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));


function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired
};

////////////////////////////////

function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [valid, setValid] = React.useState(true);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleChangePass = useCallback(
    event => {
      setPass(event.target.value);
    },
    [setPass]
  );

  const handleChangeEmail = useCallback(
    event => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  function handleClose() {
    setOpen(false);
  }

  
  function handleLogIn() {
    if(email && pass){
      setValid(true);
      props.handleLogIn(email, pass);
    }else{
      setValid(false);
    }
  }

  return (
    <div>
      <Button
        variant="outlined"
        size="large"
        color="default"
        onClick={handleClickOpen}
      >
        Zaloguj
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Logowanie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Podaj swój email i hasło aby się zalogować.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="Email"
            label="Email"
            type="email"
            value={email}
            onChange={handleChangeEmail}
            fullWidth
          />
          <TextField
            margin="dense"
            id="Hasło"
            label="Hasło"
            type="password"
            value={pass}
            onChange={handleChangePass}
            fullWidth
          />
          {valid ? "" : (<div>Uzupełnij wszystkie pola!</div>)}
          <Typography>Nie masz jeszcze konta? Kliknij <Link to='/signup/' onClick={handleClose}>tutaj</Link>.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleLogIn} color="primary">
            Zaloguj
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openWrong, setOpenWrong] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [signIN, setSignIN] = useState(Cookies.get("isSignIn") ? true : false);
  const [name, setName] = useState(Cookies.get("loggedUser") ? JSON.parse(Cookies.get("loggedUser")).name : "");

  function handleLogIn(email, pass) {
    let correct=false;
    UserData = Cookies.getJSON("UserData");
    console.log(UserData);
    UserData.forEach(element => {
      
    console.log(element.email);
    
    console.log(email);
    console.log(element.password);
    console.log(pass);
        if(element.email == email && element.password == pass){
          correct=true;
          var inFifteenMinutes = new Date(new Date().getTime() + 300 * 60 * 1000);
          Cookies.set('isSignIn', true, { expires: inFifteenMinutes})
          Cookies.set('loggedUser', JSON.stringify(element), { expires: inFifteenMinutes})
          setSignIN(Cookies.get("isSignIn"));
          setName(element.name);
        }
      });
      if(!correct){
        setOpenWrong(true);
      }else{
        setOpen(true);
      }
  }

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  function handleSignOut() {
    handleMenuClose();
    handleMobileMenuClose();
    setSignIN(false);
    setName("");
    Cookies.remove('loggedUser');
    Cookies.remove('loggedName');
  }

  function handleClose() {
    setOpen(false);
  }

  function handleCloseWrong() {
    setOpenWrong(false);
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {signIN ? (
        <Link to="/profile" className={classes.navLink}>
          <MenuItem> Profil </MenuItem>
        </Link>
      ) : (
        ""
      )}
      {signIN ? (
        <Link to="/addNewAction" className={classes.navLink}>
          <MenuItem> Dodaj nową akcję wsparcia </MenuItem>
        </Link>
      ) : (
        ""
      )}
      {signIN ? (
        <Link to="/singout" className={classes.navLink}>
          <MenuItem onClick={handleSignOut}> Wyloguj </MenuItem>
        </Link>
      ) : (
        ""
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {signIN ? (
        <Link to="/profile" className={classes.navLink}>
          <MenuItem> Profil </MenuItem>
        </Link>
      ) : (
        ""
      )}
      {signIN ? (
        <Link to="/addNewAction" className={classes.navLink}>
          <MenuItem> Dodaj nową akcję wsparcia </MenuItem>
        </Link>
      ) : (
        ""
      )}
      {signIN ? (
        <Link to="/singout" className={classes.navLink}>
          <MenuItem onClick={handleSignOut}> Wyloguj </MenuItem>
        </Link>
      ) : (
        ""
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar>
        <Toolbar>
          <TemporaryDrawer />
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/home" className={classes.navLink}>
              <img
                src="https://i.ibb.co/ftkk3ZL/suppoerter1.png"
                className={classes.logoImg}
                alt='logo'
              />
            </Link>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {signIN ? name : ""}
          </div>
          <div className={classes.sectionDesktop}>
            {signIN ? (
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            ) : (
              <FormDialog handleLogIn={handleLogIn}></FormDialog>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <div></div>

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="success"
          message="Zalogowano pomyślnie!"
        />
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={openWrong}
        autoHideDuration={6000}
        onClose={handleCloseWrong}
      >
        <MySnackbarContentWrapper
          onClose={handleCloseWrong}
          variant="warning"
          message="Coś poszło nie tak!"
        />
      </Snackbar>

      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
