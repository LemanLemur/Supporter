import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HomeTile from "./MainMenuComponent/HomeTileComponent";

import AlarmIcon from "@material-ui/icons/Alarm";
import HealingIcon from "@material-ui/icons/Healing";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import CardTravelIcon from "@material-ui/icons/CardTravel";

import { Link } from "react-router-dom";

import tileData from "./Data/SupportData";
import { Divider } from "@material-ui/core";

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
    marginTop: "15px",
    marginBottom: "15px"
  }
}));

export default function HomeGrid(props) {
  const classes = useStyles();

  var tileOption=[];
  var tile=[];

  function prepareTile() {

    tileData.forEach(element => {
        if (element.label == props.option) {
            tileOption.push(element);
          } 
      });

      let j=0;
      tileOption.forEach(element => {
      if (j < 5) {
        tile.push(element);
      }
      j++;
    });
  }

  return (
    <div className={classes.conteiner}>
      {prepareTile()}
      <center>
        <div className={classes.root} data-simplebar>
          <Typography variant="h3" component="h3" className={classes.desktop}>
            {props.icon === 0 ? <AlarmIcon fontSize="large" /> : ""}
            {props.icon === 1 ? <HealingIcon fontSize="large" /> : ""}
            {props.icon === 2 ? (
              <AirplanemodeActiveIcon fontSize="large" />
            ) : (
              ""
            )}
            {props.icon === 3 ? <CardTravelIcon fontSize="large" /> : ""}{" "}
            {props.descryption}
          </Typography>

          <Typography variant="h3" component="h3" className={classes.mobile}>
            {props.icon === 0 ? <AlarmIcon fontSize="small" /> : ""}
            {props.icon === 1 ? <HealingIcon fontSize="small" /> : ""}
            {props.icon === 2 ? (
              <AirplanemodeActiveIcon fontSize="small" />
            ) : (
              ""
            )}
            {props.icon === 3 ? <CardTravelIcon fontSize="small" /> : ""}{" "}
            {props.descryption}
          </Typography>

          <div className={classes.desktop}>
            <center>
              <Grid container spacing={5}>
                {tile.map(data =>
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
                )}
                <Grid item xs={4}>
                <Link
                        to={`/pages/${props.option}`}
                        style={{ textDecoration: "none" }}
                      >
                <HomeTile void/>
                      </Link>
                </Grid>
              </Grid>
            </center>
          </div>

          <div className={classes.mobile}>
            <center>
              <Grid container spacing={5}>
                {tile.map(data =>
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
                )}
                <Grid item xs={12}>
                <Link
                        to={`/pages/${props.option}`}
                        style={{ textDecoration: "none" }}
                      >
                <HomeTile void />
                </Link>
                </Grid>
              </Grid>
            </center>
          </div>
        </div>
        <Divider />
      </center>
    </div>
  );
}
