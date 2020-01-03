import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
}));

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

function MediaCard(props) {
  const classes = useStyles();

  const [tmpAvatar, setTmpAvatar] = useState(
    JSON.parse(Cookies.get("loggedUser")).avatar
  );

  function handleChangeAvatar(newAvatarLink) {
    setTmpAvatar(newAvatarLink);
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={tmpAvatar} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={"/yourpages/" + props.id}>
          <Button size="small" color="primary">
            Moje strony
          </Button>
        </Link>
        <FormDialog handleChangeAvatar={handleChangeAvatar}></FormDialog>
      </CardActions>
    </Card>
  );
}

function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [link, setLink] = useState(
    JSON.parse(Cookies.get("loggedUser")).avatar
  );

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleSave() {
    props.handleChangeAvatar(link);
    let Obj = JSON.parse(Cookies.get("loggedUser"));
    Obj.avatar = link;
    Cookies.set("loggedUser", JSON.stringify(Obj));
    let tmpUsers = [];
    Cookies.getJSON("UserData").forEach(element => {
      if (element.id != Obj.id) {
        tmpUsers.push(element);
        tmpUsers.push(Obj);
      }
      else if(element.id == Obj.id){
        tmpUsers.push(Obj);
      }
    });
    Cookies.set("UserData", JSON.stringify(tmpUsers));
    setOpen(false);
  }

  const handleChangeLink = useCallback(
    event => {
      setLink(event.target.value);
    },
    [setLink]
  );

  return (
    <div>
      <Button size="small" color="primary" onClick={handleClickOpen}>
        Zmień avatar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Zmień avatar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Jeżeli chcesz zmienić swój avatar wklej link do grafiki, którą
            chcesz ustawić.
          </DialogContentText>
          <TextField
            autoFocus
            value={link}
            onChange={handleChangeLink}
            margin="dense"
            id="name"
            label="Link"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleSave} color="primary">
            Zapisz
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default function ProfilePage(props) {
  const classes = useStyles();

  const [chPass, setChPass] = useState(false);
  const [change, setChange] = useState(false);
  const [tmpMail, setTmpMail] = useState(
    JSON.parse(Cookies.get("loggedUser")).email
  );
  const [tmpName, setTmpName] = useState(
    JSON.parse(Cookies.get("loggedUser")).name
  );
  const [tmpSex, setTmpSex] = useState(
    JSON.parse(Cookies.get("loggedUser")).sex
  );
  const [tmpObj, setTmpObj] = useState(JSON.parse(Cookies.get("loggedUser")));

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
        !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(event.target.value)
      ) {
        setMailValid(false);
      } else {
        setMailValid(true);
      }
    },
    [setTmpMail, setMailValid, setChange]
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
    if (passwordValid && nameValid && mailValid) {
      let Obj = JSON.parse(Cookies.get("loggedUser"));
      Obj.name = tmpName;
      Obj.mail = tmpMail;
      Obj.sex = tmpSex;
      Obj.password = tmpPass2;
      setTmpObj(Obj);
      Cookies.set("loggedUser", JSON.stringify(Obj));
      let tmpUsers = [];
      Cookies.getJSON("UserData").forEach(element => {
        if (element.id != Obj.id) {
          tmpUsers.push(element);
        }
        else if(element.id == Obj.id){
          tmpUsers.push(Obj);
        }
      });
      Cookies.set("UserData", JSON.stringify(tmpUsers));
      console.log(Cookies.getJSON("UserData"));
      setChange(false);
    }
  }

  return (
    <div className={classes.mainDiv}>
      <Typography variant="h3" className={classes.title}>
        Dane konta
      </Typography>
      <p></p>
      <center>
        <Paper className={classes.root}>
          <MediaCard name={tmpName} id={tmpObj.id}></MediaCard>
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
          {chPass ? (
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
          ) : (
            ""
          )}
          {chPass ? (
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
          ) : (
            ""
          )}
          {/* <Typography>gówno {passwordValid.toString()} h1: {tmpPass1} h2: {tmpPass2}</Typography> */}
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

          {chPass ? (
            <Button
              variant="outlined"
              size="large"
              color="primary"
              className={classes.margin}
              onClick={() => setChPass(!chPass)}
            >
              Anuluj
            </Button>
          ) : (
            <Button
              variant="outlined"
              size="large"
              color="primary"
              className={classes.margin}
              onClick={() => setChPass(!chPass)}
            >
              Zmień hasło
            </Button>
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
      </center>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     profiles: state.pofiles
//   }
// };
// const mapDispatchToProps = { profilesLoad };

// export const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
