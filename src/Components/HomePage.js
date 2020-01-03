import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PaperSheet from "./PaperComponent";
import Paper from "@material-ui/core/Paper";
import HomeGrid from "./HomeGrid";

const useStyles = makeStyles(theme => ({
  mainDiv: {
    marginTop: "80px"
  },
  root: {
    padding: theme.spacing(3, 2),
    width: "75%",
    marginTop: "20px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  m: {
    marginBottom: "20px"
  }
}));

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

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <PaperSheet className={classes.m}></PaperSheet>

      <center>
        <Paper className={classes.root}>
          <HomeGrid
            icon={0}
            descryption={descryption[0].title}
            option="home"
            className={classes.m}
          />
          <HomeGrid
            icon={1}
            descryption={descryption[1].title}
            option="healt"
            className={classes.m}
          />
          <HomeGrid
            icon={2}
            descryption={descryption[2].title}
            option="start"
            className={classes.m}
          />
          <HomeGrid
            icon={3}
            descryption={descryption[3].title}
            option="travel"
            className={classes.m}
          />
        </Paper>
      </center>
    </div>
  );
}
