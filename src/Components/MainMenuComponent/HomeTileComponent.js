import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider} from "@material-ui/core";
import ProgressBar from "react-bootstrap/ProgressBar";
import imgVoid from "../../img/trzy.png";

import 'simplebar/dist/simplebar.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles(theme => ({
  root: {
    height: "230px",
    width: "90%",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#BEBEBE",
    boxShadow: "1",
    borderBottom: "8px solid #3f51b5",
    borderRadius: "5px",
    overflow: "auto",
    overflowY: "hidden"
  },
  rootHover: {
    height: "230px",
    width: "90%",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#BEBEBE",
    boxShadow: "1",
    borderBottom: "8px solid green",
    borderRadius: "5px",
    overflow: "auto",
    overflowY: "hidden",
    cursor: "pointer",
    boxShadow: "00px 0px 5px 0px grey"
  },
  img: {
    width: "100%",
    height: "65%"
  },
  imgVoid: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontFamily: "Georgia",
    height: "45px",
    color: "green",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "16px"
  },
  titleHover: {
    fontFamily: "Georgia",
    height: "45px",
    color: "#3f51b5",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "16px"
  },
  progressBar: {
    marginTop: "10px",
    marginBottom: "10px",
    width: "95%"
  }
}));

export default function HomeTileComponent(props) {
  const classes = useStyles();
  const [focus, setFocus] = useState(false);

  function onFocusListener() {
    setFocus(true);
  }

  function onBlurListner() {
    setFocus(false);
  }

  return (
    <div
      className={focus ? classes.rootHover : classes.root}
      onMouseMove={onFocusListener}
      onMouseLeave={onBlurListner}
    >
      {props.void ? (
        <span className={classes.title}>
        <img src={imgVoid} className={classes.imgVoid} alt="Więcej akcji." />
        </span>
      ) : (
        <span>
          <img
            src={props.img}
            className={classes.img}
            alt="Kliknij aby przejść do akcji."
          />
          <Divider />
          <div className={focus ? classes.title : classes.titleHover}>
            {props.title}
          </div>
          <ProgressBar
            striped
            animated={focus ? true : false}
            variant="success"
            now={props.value}
            label={`${props.value}%`}
            className={classes.progressBar}
          ></ProgressBar>
        </span>
      )}
    </div>
  );
}
