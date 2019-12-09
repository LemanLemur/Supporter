import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
}));

export default function PaymentMethodTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [blik, setBlik] = useState("");
  const [name, setName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [csv, setCsv] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setBlik("");
    // setName("");
    // setCardNum("");
    // setMonth("");
    // setYear("");
    // setCsv("");
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const handleChangeBlik = useCallback(
    event => {
      if (
        event.target.value === "" ||
        (/\d+$/.test(event.target.value) && event.target.value.length <= 6)
      ) {
        setBlik(event.target.value);
      }
    },
    [setBlik]
  );

  const handleChangeAmount = useCallback(
    event => {
      if (
        event.target.value === "" ||
        (/\d+$/.test(event.target.value))
      ) {
        setAmount(event.target.value);
      }
    },
    [setAmount]
  );

  const handleChangeCardNum = useCallback(
    event => {
      if (
        event.target.value === "" ||
        (/\d+$/.test(event.target.value) && event.target.value.length <= 16)
      ) {
        setCardNum(event.target.value);
      }
    },
    [setCardNum]
  );

  const handleChangeMonth = useCallback(
    event => {
      if (
        event.target.value === "" ||
        (/\d+$/.test(event.target.value) && event.target.value.length <= 2)
      ) {
        setMonth(event.target.value);
      }
    },
    [setMonth]
  );

  const handleChangeYear = useCallback(
    event => {
      if (
        event.target.value === "" ||
        (/\d+$/.test(event.target.value) && event.target.value.length <= 4)
      ) {
        setYear(event.target.value);
      }
    },
    [setYear]
  );

  const handleChangeCsv = useCallback(
    event => {
      if (
        event.target.value === "" ||
        (/\d+$/.test(event.target.value) && event.target.value.length <= 4)
      ) {
        setCsv(event.target.value);
      }
    },
    [setCsv]
  );

  const handleChangeEmail = useCallback(
    event => {
      if (
        /^[a-zA-Z0-9]+$|^[a-zA-Z0-9]+@|^[a-zA-Z0-9]+@[a-zA-Z0-9]+$|^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(
          event.target.value
        )
      ) {
        setEmail(event.target.value);
      }
    },
    [setEmail]
  );

  const handleChangeName = useCallback(
    event => {
      if (
        event.target.value === "" ||
        /^[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]+$|^[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]+\s$|^[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]+\s[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]+$/.test(
          event.target.value
        )
      ) {
        setName(event.target.value);
      }
    },
    [setName]
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Karta płatnicza" {...a11yProps(0)} />
          <Tab label="BLIK" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography>Płatność kartą płatniczą</Typography>

          <TextField
            fullWidth
            id="outlined-error"
            label="Imię i nazwisko"
            className={classes.textField}
            value={name}
            onChange={handleChangeName}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-error"
            label="Numer karty"
            className={classes.textField}
            value={cardNum}
            onChange={handleChangeCardNum}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-error"
            label="Miesiąc"
            className={classes.textField}
            value={month}
            onChange={handleChangeMonth}
            margin="normal"
            variant="outlined"
            helperText="Format MM/RRRR"
          />
          <TextField
            id="outlined-error"
            label="Rok"
            className={classes.textField}
            value={year}
            onChange={handleChangeYear}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-error"
            label="CSV"
            className={classes.textField}
            value={csv}
            onChange={handleChangeCsv}
            margin="normal"
            variant="outlined"
            helperText="3, 4 liczby zd=najdujące się na odwrocie karty!"
          />
          <TextField
            id="outlined-error"
            label="Kwota"
            className={classes.textField}
            value={amount}
            onChange={handleChangeAmount}
            margin="normal"
            variant="outlined"
            helperText="Kwota w PLN"
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Typography>Płatność czekiem Blik</Typography>

          <TextField
            label="Blik"
            value={blik}
            onChange={handleChangeBlik}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            helperText="Podaj 6 cyfr czeku blik."
          />
          <TextField
            fullWidth
            label="E-Mail"
            value={email}
            onChange={handleChangeEmail}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-error"
            label="Kwota"
            className={classes.textField}
            value={amount}
            onChange={handleChangeAmount}
            margin="normal"
            variant="outlined"
            helperText="Kwota w PLN"
          />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
