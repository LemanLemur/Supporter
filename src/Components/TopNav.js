import React, { useState, useEffect , useCallback} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from "react-router-dom";
import TemporaryDrawer from "./HamburgerMenu"
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// import * as firebaseui from 'firebaseui'
// import 'firebase/auth';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  paper: {
    color: 'black',
    padding: theme.spacing(3, 2),
    width: '100%',
  },
  navLink: {
    color: 'inherit',
    textDecoration: 'none'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  logoImg: {
    height: "50px",
    width: "200px",
  }
}));

const profileData =
  {
    name: "Bartłomiej Lemański",
    logged: true,
  };

  function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
  
    function handleClickOpen() {
      setOpen(true);
    }
  
    function handleClose() {
      setOpen(false);
    }
    
    function handleLogIn() {
      // setOpen(false);
      // this.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   console.log(errorMessage);
      // });
    }

    const handleChangePass = useCallback(
      (event) => {
  
          setPass(event.target.value);
      },
      [setPass]
    );

    const handleChangeEmail = useCallback(
      (event) => {
  
        setEmail(event.target.value);
      },
      [setEmail]
    );

    function handleClose() {
      setOpen(false);
    }
  
    return (
      <div>
        <Button variant="outlined" size="large" color="default" onClick={handleClickOpen}>
          Zaloguj
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [signIN, setSignIN] = useState(profileData.logged);

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

  function handleSignOut(){
    handleMenuClose();
    handleMobileMenuClose();
    setSignIN(false);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {signIN ? (<Link to="/profile" className={classes.navLink}><MenuItem> Profil </MenuItem></Link>) : ""}
      {signIN ? (<Link to="/addNewAction" className={classes.navLink}><MenuItem> Dodaj nową akcję wsparcia </MenuItem></Link>) : ""}
      {signIN ? (<Link to="/singout" className={classes.navLink}><MenuItem onClick={handleSignOut}>  Wyloguj </MenuItem></Link>) : ""}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {signIN ? (<Link to="/profile" className={classes.navLink}><MenuItem> Profil </MenuItem></Link>) : ""}
      {signIN ? (<Link to="/addNewAction" className={classes.navLink}><MenuItem> Dodaj nową akcję wsparcia </MenuItem></Link>) : ""}
      {signIN ? (<Link to="/singout" className={classes.navLink}><MenuItem onClick={handleSignOut}>  Wyloguj </MenuItem></Link>) : ""}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar>
        <Toolbar>
            <TemporaryDrawer />
          <Typography className={classes.title} variant="h6" noWrap>
          <Link to="/home" className={classes.navLink}><img src="https://i.ibb.co/ftkk3ZL/suppoerter1.png" className={classes.logoImg}/></Link>
          </Typography>
         
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {signIN ? (profileData.name) : ""}
          </div>
          <div className={classes.sectionDesktop}>
          {signIN ? (<IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>) : (<FormDialog></FormDialog>)}
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
      
    <div>
    </div>

      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
