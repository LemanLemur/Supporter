import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import homeData from './Data/SupportData';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import UserInfo from './User/UserInfoComponent';
import ShareFb from './ShareFb';
import {useLocation} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "60%",
    marginTop: "25px",
    marginLeft: "auto",
    marginRight: "auto", 
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  mainImg: {
    width: "100%",
    height: "300px",
    border: "2px solid #ccc",
    borderRadius: "5px",
  },
  title: {
    marginTop: "50px",
    fontFamily: "Georgia",
    color: "#3f51b5",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "30px",
    // textShadow: "2px 2px 8px grey"
  },
  typographyStart: {
    marginTop: "30px",
    fontFamily: "Georgia",
    color: "#3f51b5",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  typographyAds: {
    marginTop: "10px",
    fontFamily: "Georgia",
    width: "70%",
  },
  donateButton: {
    marginTop: "100px",
  },
  button: {
    marginRight: "20px",
    fontWeight: "bold",
    fontFamily: "Georgia",
  },
  conPaper: {
    marginTop: "20px",
    marginBottom: "30px",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto", 
  },
  conTitle: {
    marginLeft: "50px",
    fontSize: "20px",
    fontFamily: "Georgia",
    color: "#3f51b5",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  con: {
    marginTop: "20px",
    fontSize: "16px",
    fontFamily: "Georgia",
    textAlign: "justify",
    marginLeft: "40px",
    marginRight: "40px", 
    lineHeight: "1.8",
  },
}));

export default function SupportPage(props) {
  const classes = useStyles();

  return (
    <div>
      <div align="center">
        <Typography className={classes.title}>{homeData[props.id].title}</Typography>
      </div>
      <div>
            <Paper className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                    <img className={classes.mainImg} src={homeData[props.id].img}></img>
                </Grid>
                  <Grid item xs={6}>

                    <center>
                      <Typography className={classes.typographyStart}>
                        Zebrano: { homeData[props.id].goal * homeData[props.id].value / 100 } zł / {homeData[props.id].goal} zł
                      </Typography>
                    </center>

                    <center>
                      <Typography className={classes.typographyStart}>
                        <ProgressBar striped variant="success" now={homeData[props.id].value} label={`${homeData[props.id].value}%`} className={classes.margin}/>
                      </Typography>
                    </center>

                    <center>
                      <div className={classes.donateButton}>
                        <Button variant="contained" color="secondary" className={classes.button}>
                          Obejrzyj Reklamy!
                        </Button>
                        <Button variant="contained" color="primary" className={classes.button}>
                          Wesprzyj!
                        </Button>
                      </div>
                    </center>

                    <div>
                      <center>
                        <Typography className={classes.typographyAds} variant="body2" color="textSecondary">
                          Oglądając blok reklamowy wspierasz akcje bez konieczności nadwyrężania własnego portfela :)
                        </Typography>
                      </center>
                    </div>

                  </Grid>
              </Grid>
            </Paper>

            <Paper className={classes.conPaper}>
              
            <Grid container spacing={3}>
            <Grid item xs={8}>
              <br></br>
              <Typography className={classes.conTitle}>{homeData[props.id].contentTitle}</Typography>
              <Typography className={classes.con}>{homeData[props.id].content}</Typography>
              <br></br>
            </Grid>

            <Grid item xs={4}>
              <ShareFb url={"https://hardcore-benz-a75902.netlify.com/supportpage/"+props.id}></ShareFb>
              <UserInfo id={homeData[props.id].owner}></UserInfo>
            </Grid>
            </Grid>

            </Paper>

      </div>
    </div>
  );
}