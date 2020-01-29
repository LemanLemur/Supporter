import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import data from "../Data/PaymentData";
import { Divider, Paper, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import { fontWeight } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  name: {
    marginLeft: "10px",
    fontSize: "20px",
    fontFamily: "Georgia"
  },
  comment: {
    marginLeft: "10px",
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "14px",
    fontFamily: "Georgia"
  },
  title: {
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "18px",
    fontFamily: "Georgia"
  },
  amount: {
    float: "right",
    marginLeft: "10px",
    marginTop: "5px",
    marginBottom: "5px",
    fontSize: "20px",
    fontFamily: "Georgia",
    textDecoration: "bold",
    color: "#338E55"
  }
}));

export default function UserInfo(props) {
  const classes = useStyles();
  const [tmpData, setTmpData] = useState([]);
  const { id } = props;

  useEffect(() => {
    setTmpData(
      data.filter(function(tmp) {
        return tmp.supportPgaeId == id;
      })
    );
  }, [id, setTmpData]);

  return (
    <div className={classes.root}>
      <Typography className={classes.title} color="Secondary">
        Ostatnie darowizny:
      </Typography>
      <Divider light />

      {tmpData.map(data =>
        data.hideName ? (
          <div>
            <Grid container spacing={2} xs={12}>
              <Grid item sm={8}>
                <Typography className={classes.name}>Anonim</Typography>
                <Typography className={classes.comment} color="textSecondary">
                  {data.comment}
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography className={classes.amount}>
                  {data.amount} {data.currency}
                </Typography>
              </Grid>
            </Grid>
            <Divider light />
          </div>
        ) : (
          <div>
            <Grid container spacing={2} xs={12}>
              <Grid item sm={8}>
                <Typography className={classes.name}>{data.name}</Typography>
                <Typography className={classes.comment} color="textSecondary">
                  {data.comment}
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography className={classes.amount}>
                  {data.amount} {data.currency}
                </Typography>
              </Grid>
            </Grid>
            <Divider light />
          </div>
        )
      )}
    </div>
  );
}
