import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import PropTypes from "prop-types";
import clsx from "clsx";
import Snackbar from "@material-ui/core/Snackbar";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import WarningIcon from "@material-ui/icons/Warning";
import { amber, green } from "@material-ui/core/colors";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";

import Cookies from "js-cookie";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "50%",
    marginBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  mainDiv: {
    marginTop: "80px"
  },
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  title: {
    marginLeft: "25%",
    marginTop: "50px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%"
    }
  },

  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  mainImg: {
    width: "80%",
    height: "300px",
    border: "2px solid #ccc",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px",
      height: "150px",
      border: "1px solid #000"
    }
  }
}));

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const sex = [
  {
    value: "0",
    label: "Kobieta"
  },
  {
    value: "1",
    label: "Mężczyzna"
  },
  {
    value: "2",
    label: "Nie chcę podawać"
  }
];

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

export default function SignUpPage() {
  const classes = useStyles();

  const [chPass, setChPass] = useState(false);
  const [isImg, setIsImg] = useState(false);
  const [change, setChange] = useState(false);
  const [tmpMail, setTmpMail] = useState("");
  const [tmpName, setTmpName] = useState("");
  const [tmpSex, setTmpSex] = useState("");
  const [tmpAvatar, setTmpAvatar] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openWrong, setOpenWrong] = React.useState(false);

  const [tmpPass1, setTmpPass1] = useState("");
  const [tmpPass2, setTmpPass2] = useState("");

  const [mailValid, setMailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);

  const handleChangeMail = useCallback(
    event => {
      setTmpMail(event.target.value);
      setChange(true);

      if (!event.target.value) {
        setMailValid(false);
      } else if (
        !/^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[A-Za-z]+$/.test(event.target.value)
      ) {
        setMailValid(false);
      } else {
        setMailValid(true);
      }
    },
    [setTmpMail, setMailValid, setChange]
  );

  const handleChangeAvatar = useCallback(
    event => {
      setTmpAvatar(event.target.value);
      setChange(true);
      if (event.target.value) {
        setIsImg(true);
      } else {
        setIsImg(false);
      }
    },
    [setTmpAvatar, setChange]
  );

  const handleChangeName = useCallback(
    event => {
      setTmpName(event.target.value);
      setChange(true);

      if (!event.target.value) {
        setNameValid(false);
      } else if (
        !/^[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]+\s[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]+$/.test(
          event.target.value
        )
      ) {
        setNameValid(false);
      } else {
        setNameValid(true);
      }
    },
    [setTmpName, setNameValid, setChange]
  );

  const handleChangeSex = useCallback(
    event => {
      setTmpSex(event.target.value);
      setChange(true);
    },
    [setTmpSex, setChange]
  );

  const handleChangePass1 = useCallback(
    event => {
      setTmpPass1(event.target.value);
      setChange(true);

      if (!event.target.value) {
        setPasswordValid(false);
      } else if (event.target.value == tmpPass2) {
        setPasswordValid(true);
      } else {
        setPasswordValid(false);
      }
    },
    [setTmpPass1, setPasswordValid, setChange, tmpPass2]
  );

  const handleChangePass2 = useCallback(
    event => {
      setTmpPass2(event.target.value);
      setChange(true);

      if (!event.target.value) {
        setPasswordValid(false);
      } else if (tmpPass1 == event.target.value) {
        setPasswordValid(true);
      } else {
        setPasswordValid(false);
      }
    },
    [setTmpPass2, setPasswordValid, setChange, tmpPass1]
  );

  function handleSave() {
    if (tmpName && tmpAvatar && tmpMail && tmpPass1 && tmpSex) {
      if (passwordValid && nameValid && mailValid) {
        let Obj = {};
        Obj.id = getRandomInt(20, 200000) + getRandomInt(20, 20000);
        Obj.name = tmpName;
        Obj.email = tmpMail;
        Obj.sex = tmpSex;
        Obj.avatar = tmpAvatar;
        Obj.password = tmpPass2;
        let tmpUsers = [];
        Cookies.getJSON("UserData").forEach(element => {
          tmpUsers.push(element);
        });
        tmpUsers.push(Obj);
        Cookies.set("UserData", JSON.stringify(tmpUsers));
        console.log(Cookies.getJSON("UserData"));
        setChange(false);
        setTmpAvatar("");
        setTmpMail("");
        setTmpName("");
        setTmpPass1("");
        setTmpPass2("");
        setTmpSex("");
        setOpen(true);
      }
    } else {
      setOpenWrong(true);
    }
  }

  function handleClose() {
    setOpen(false);
  }

  function handleCloseWrong() {
    setOpenWrong(false);
  }

  return (
    <div className={classes.mainDiv}>
      <Typography variant="h3" className={classes.title}>
        Stwórz nowe konto
      </Typography>
      <p></p>
      <center>
        <Paper className={classes.root}>
          <TextField
            id="outlined-name"
            label="Imię i nazwisko"
            className={classes.textField}
            value={tmpName}
            onChange={handleChangeName}
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-name"
            label="E-mail"
            className={classes.textField}
            value={tmpMail}
            onChange={handleChangeMail}
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            fullWidth
            id="outlined-select-currency"
            select
            label="Płeć"
            className={classes.textField}
            value={tmpSex}
            onChange={handleChangeSex}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            margin="normal"
            variant="outlined"
          >
            {sex.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-name"
            label="Avatar"
            className={classes.textField}
            value={tmpAvatar}
            onChange={handleChangeAvatar}
            margin="normal"
            variant="outlined"
            helperText="Podaj link do twojego avatara"
            fullWidth
          />
          {isImg ? (
            <center>
              <img
                className={classes.mainImg}
                src={tmpAvatar}
                alt={tmpAvatar}
              />
            </center>
          ) : (
            <center>
              <img
                className={classes.mainImg}
                src="http://www.megael.pl/media/grafika/admin/wordpress/WiCMS-brak-obrazka-big.png"
                alt={tmpAvatar}
              />
            </center>
          )}
          <TextField
            fullWidth
            id="outlined-name"
            label="Nowe hasło"
            className={classes.textField}
            type="password"
            onChange={handleChangePass1}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-name"
            label="Potwierdź hasło"
            className={classes.textField}
            type="password"
            onChange={handleChangePass2}
            margin="normal"
            variant="outlined"
            helperText="Hało musi być takie samo w obu polach"
          />
          {mailValid ? (
            ""
          ) : (
            <div>
              <Typography>
                <font color="red">* Niepoprawny adres email!</font>
              </Typography>
            </div>
          )}
          {nameValid ? (
            ""
          ) : (
            <div>
              <Typography>
                <font color="red">* Należy podać imię i nazwisko!</font>
              </Typography>
            </div>
          )}
          {passwordValid ? (
            ""
          ) : (
            <div>
              <Typography>
                <font color="red">
                  * Hasła się nie zgadzają, bądź są niepoprawne!
                </font>
              </Typography>
            </div>
          )}
          {change ? (
            <Button
              variant="outlined"
              size="large"
              color="primary"
              className={classes.margin}
              onClick={handleSave}
            >
              Zapisz
            </Button>
          ) : (
            ""
          )}
        </Paper>
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
            message="Utworzono nowe konto!"
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
      </center>
    </div>
  );
}
