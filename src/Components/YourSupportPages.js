import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import homeData from "./Data/SupportData";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

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
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: "auto",
    marginLeft: "auto"
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
  },
  buttonR: {
    float: "right"
  }
}));

function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link to={"/supportpage/" + props.id}>
          <CardMedia className={classes.media} image={props.avatar} />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Usuń
        </Button>
        <Link to={"/editpage/"+props.id}>
        <Button size="small" color="primary">
          Edytuj
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default function YourSupportPages(props) {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <center>
        <Paper className={classes.root}>
          <Grid container spacing={5}>
            {homeData.map(data =>
              data.owner == props.id ? (
                <Grid item xs={4}>
                  <MediaCard
                    id={data.id}
                    avatar={data.img}
                    title={data.title}
                  ></MediaCard>
                </Grid>
              ) : (
                ""
              )
            )}
          </Grid>
        </Paper>
      </center>
    </div>
  );
}
