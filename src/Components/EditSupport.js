import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Divider, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import WarningIcon from "@material-ui/icons/Warning";
import { amber, green } from "@material-ui/core/colors";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import clsx from "clsx";
import homeData from "./Data/SupportData";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "50%",
    marginRight: "auto",
    marginLeft: "auto",

    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  mainDiv: {
    marginTop: "80px",
    marginBottom: "80px"
  },
  title: {
    fontSize: "20px",
    fontFamily: "Georgia",
    color: "#3f51b5",
    textTransform: "uppercase",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "30px",
      fontSize: "16px",
      width: "90%"
    }
  },
  divider: {
    marginTop: "10px",
    marginBottom: "10px"
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
  },
  buttonR: {
    float: "right",
    marginRight: "10px"
  },
  buttonL: {
    float: "left",
    marginLeft: "10px"
  }
}));

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

const category = [
  {
    value: "0",
    label: "Zdrowie"
  },
  {
    value: "1",
    label: "Podróż"
  },
  {
    value: "2",
    label: "Startup"
  },
  {
    value: "3",
    label: "Nie wybrano"
  }
];

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

export default function EditSupport(props) {
  const classes = useStyles();
  var count;
  var tmpcount;

  const [isAward, setIsAward] = useState(false);
  const [awardsCount, setAwardsCount] = useState(0);
  const [awardsTitle, setAwardsTitle] = useState();
  const [awards, setAwards] = useState([]);
  const [isImg, setIsImg] = useState(false);
  const [img, setImg] = useState("");
  const [preView, setPreView] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openWrong, setOpenWrong] = React.useState(false);

  const [goal, setGoal] = useState("");
  const [titleContent, setTitleContent] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("");

  useEffect(() => {
      tmpcount=0;
      homeData.forEach(element => {
        if(element.id == props.id){
            count = tmpcount;
        }
        tmpcount++;
      });

    setIsImg(true);
    setImg(homeData[count].img);
    setGoal(homeData[count].goal);
    setTitleContent(homeData[count].contentTitle);
    setContent(homeData[count].content);
    setTitle(homeData[count].title);

    if(homeData[count].label == "travel"){
        setLabel(1)
    }else if(homeData[count].label == "health"){
        setLabel(0)
    }else if(homeData[count].label == "health"){
        setLabel(2)
    }else{
        setLabel(3)
    }

    if(homeData[count].awards){
        setIsAward(true);
        setAwardsTitle(homeData[count].awardsTitle);
        setAwardsCount(homeData[count].awards.length);
        setAwards(homeData[count].awards);
    }
  }, []);

  function handleAddAwards() {
    setIsAward(true);
    setAwardsCount(awardsCount + 1);
    awards.push({ goal: "", content: "" });
  }

  function handleRemoveAwards() {
    if (awardsCount > 0) {
      setIsAward(false);
      setAwardsCount(0);
      setAwards([]);
    }
  }

  function handlePreView() {
    setPreView(!preView);
  }

  function handleAdd() {
    var isValid = false;
    if (img && goal && content && titleContent && title) isValid = true;

    setAwardsTitle("");
    setImg("");
    setPreView(false);
    setIsImg(false);
    setIsAward(false);
    setGoal("");
    setTitleContent("");
    setContent("");
    setTitle("");
    setLabel("");
    setAwards([]);

    if (isValid) {
      setOpen(true);
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

  const handleChengeAwardsTitle = useCallback(
    event => {
      if (event.target.value === "") {
        setAwardsTitle(event.target.value);
      } else {
        setAwardsTitle(event.target.value);
      }
    },
    [setIsAward, setAwardsTitle]
  );

  const handleChengeImg = useCallback(
    event => {
      if (event.target.value === "") {
        setIsImg(false);
        setImg(event.target.value);
      } else {
        setIsImg(true);
        setImg(event.target.value);
      }
    },
    [setImg, setIsImg]
  );

  const handleChengeTitle = useCallback(
    event => {
      setTitle(event.target.value);
    },
    [setTitle]
  );

  const handleChengeGoal = useCallback(
    event => {
      setGoal(event.target.value);
    },
    [setGoal]
  );

  const handleChengeTitleContent = useCallback(
    event => {
      setTitleContent(event.target.value);
    },
    [setTitleContent]
  );

  const handleChengeContent = useCallback(
    event => {
      setContent(event.target.value);
    },
    [setContent]
  );

  const handleChangeCategory = useCallback(
    event => {
      setLabel(event.target.value);
    },
    [setLabel]
  );

  return (
    <div className={classes.mainDiv}>
      <Paper className={classes.root}>
        <center>
          <Typography className={classes.title}>
            Stwórz nową akcję wsparcia
          </Typography>
        </center>
        <Divider className={classes.divider}></Divider>
        <TextField
          autoFocus="true"
          fullWidth
          required
          id="outlined-error"
          label="Tytuł akcji wsparcia"
          className={classes.textField}
          value={title}
          onChange={handleChengeTitle}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-select-currency"
          select
          label="Kategoria"
          className={classes.textField}
          value={label}
          onChange={handleChangeCategory}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          margin="normal"
          variant="outlined"
        >
          {category.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          required
          id="outlined-error"
          label="Zdjęcie"
          className={classes.textField}
          value={img}
          onChange={handleChengeImg}
          margin="normal"
          variant="outlined"
          helperText="Link do zdjęcia reprezentującego twoją akcję"
        />
        {isImg ? (
          <center>
            <img className={classes.mainImg} src={img} alt={img} />
          </center>
        ) : (
          <center>
            <img
              className={classes.mainImg}
              src="http://www.megael.pl/media/grafika/admin/wordpress/WiCMS-brak-obrazka-big.png"
              alt={img}
            />
          </center>
        )}
        <TextField
          fullWidth
          required
          id="outlined-error"
          label="Kwota do zebrania"
          className={classes.textField}
          value={goal}
          onChange={handleChengeGoal}
          margin="normal"
          variant="outlined"
          helperText="Kwota w PLN"
        />
        <TextField
          fullWidth
          required
          id="outlined-error"
          label="Tytuł opisu"
          className={classes.textField}
          value={titleContent}
          onChange={handleChengeTitleContent}
          margin="normal"
          variant="outlined"
          helperText="Tytuł do opisu twojej akcji"
        />
        <TextField
          fullWidth
          required
          id="outlined-multiline-flexible"
          label="Treść opisu"
          multiline
          rowsMax="4"
          //   value={values.multiline}
          //   onChange={handleChange("multiline")}
          className={classes.textField}
          value={content}
          onChange={handleChengeContent}
          margin="normal"
          placeholder="Opisz o co chodzi w twojej akcji. Ludzie chętniej pomagają jeżeli więcej więdzą do czego dążysz w swojej zbiórce."
          variant="outlined"
        />
        <Divider className={classes.divider}></Divider>
        <TextField
          fullWidth
          label="Tytuł nagrody"
          className={classes.textField}
          value={awardsTitle}
          onChange={handleChengeAwardsTitle}
          margin="normal"
          variant="outlined"
          helperText="Jeżeli chcesz możesz stworzyć nagrody i odwdzięczać się ludziom, którzy pomogli ci konkretną kwotą lub poinformować ich na co przeznaczysz tę kwotę dodaj nagrody."
        />
        {awards.map(index => (
          <div>
            <TextField
              required
              id="outlined-error"
              label="Kwota"
              className={classes.textField}
              value={index.goal}
              margin="normal"
              variant="outlined"
              helperText="Za jaką kwotę jest ta nagroda."
            />
            <TextField
              required
              id="outlined-error"
              label="Opis"
              className={classes.textField}
              value={index.content}
              margin="normal"
              variant="outlined"
              helperText="Napisz wspierającym co za to otrzymają lub w co to zainwestujesz."
            />
          </div>
        ))}
        {isAward ? (
          <Button
            variant="outlined"
            onClick={handleRemoveAwards}
            color="secondary"
            className={classes.buttonL}
          >
            Resetuj nagrody
          </Button>
        ) : (
          ""
        )}
        <Button
          variant="outlined"
          onClick={handleAddAwards}
          color="primary"
          className={classes.buttonL}
        >
          Dodaj nagrodę
        </Button>
        <Button
          variant="outlined"
          onClick={handlePreView}
          color="secondary"
          className={classes.buttonR}
        >
          Podgląd
        </Button>

        <Button
          variant="outlined"
          color="primary"
          onClick={handleAdd}
          className={classes.buttonR}
        >
          Dodaj
        </Button>
        <br></br>
        <br></br>
      </Paper>

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
          message="Edytowano pomyślnie!"
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
    </div>
  );
}
