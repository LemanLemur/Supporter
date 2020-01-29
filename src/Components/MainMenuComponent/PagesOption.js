import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HomeTile from "./HomeTileComponent";

import AlarmIcon from "@material-ui/icons/Alarm";
import HealingIcon from "@material-ui/icons/Healing";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import CardTravelIcon from "@material-ui/icons/CardTravel";

import { Link } from "react-router-dom";

// import tileData from "../Data/SupportData";
import { Divider, Paper } from "@material-ui/core";

var tileData = JSON.parse(window.localStorage.getItem('SupportData'));

const useStyles = makeStyles(theme => ({
  mobile: {
    marginBottom: "10px",
    marginTop: "10px",
    fontFamily: "Georgia",
    color: "#3f51b5",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "15px",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  desktop: {
    marginBottom: "20px",
    marginTop: "20px",
    fontFamily: "Georgia",
    color: "#3f51b5",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "25px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "10px",
    justifyContent: "space-around",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  conteiner: {
    marginTop: "150px",
    marginBottom: "15px"
  },
  paper: {
    width: "75%",
    [theme.breakpoints.down("sm")]: {
        width: "95%",
      }
  }
}));

export default function HomeGrid(props) {
  const classes = useStyles();

  const descryption = [
    {
      title: "Już prawie to mamy!"
    },
    {
      title: "Pomóż w powrocie do zdrowia!"
    },
    {
      title: "Pomóż wystartować!"
    },
    {
      title: "Pomóż w podroży!"
    }
  ];

  var tileOption = [];
  var icon, content;

  function prepareTile() {
    tileData = JSON.parse(window.localStorage.getItem('SupportData'));
    tileData.forEach(element => {
      if (element.label == props.option) {
        tileOption.push(element);
      }
    });

    if (props.option == "home") {
      icon = 0;
      content = descryption[0];
    } else if (props.option == "healt") {
      icon = 0;
      content = descryption[1];
    } else if (props.option == "start") {
      icon = 0;
      content = descryption[2];
    } else if (props.option == "travel") {
      icon = 0;
      content = descryption[3];
    }
  }

  return (
    <div className={classes.conteiner}>
      {prepareTile()}
      <center>
        <Paper className={classes.paper}>
          <div className={classes.root} data-simplebar>
            <Typography variant="h3" component="h3" className={classes.desktop}>
              {icon === 0 ? <AlarmIcon fontSize="large" /> : ""}
              {icon === 1 ? <HealingIcon fontSize="large" /> : ""}
              {icon === 2 ? <AirplanemodeActiveIcon fontSize="large" /> : ""}
              {icon === 3 ? <CardTravelIcon fontSize="large" /> : ""}{" "}
              {content.title}
            </Typography>

            <Typography variant="h3" component="h3" className={classes.mobile}>
              {icon === 0 ? <AlarmIcon fontSize="small" /> : ""}
              {icon === 1 ? <HealingIcon fontSize="small" /> : ""}
              {icon === 2 ? <AirplanemodeActiveIcon fontSize="small" /> : ""}
              {icon === 3 ? <CardTravelIcon fontSize="small" /> : ""}{" "}
              {content.title}
            </Typography>

            <div className={classes.desktop}>
              <center>
                <Grid container spacing={5}>
                  {tileOption.map(data => (
                    <Grid item xs={4}>
                      <Link
                        to={`/supportpage/${data.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <HomeTile
                          img={data.img}
                          title={data.title}
                          value={data.value}
                        ></HomeTile>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </center>
            </div>

            <div className={classes.mobile}>
              <center>
                <Grid container spacing={5}>
                  {tileOption.map(data => (
                    <Grid item xs={12}>
                      <Link
                        to={`/supportpage/${data.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <HomeTile
                          img={data.img}
                          title={data.title}
                          value={data.value}
                          className={classes.homeTile}
                        ></HomeTile>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </center>
            </div>
          </div>
          <Divider />
        </Paper>
      </center>
    </div>
  );
}
