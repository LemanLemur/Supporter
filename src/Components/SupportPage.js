import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// import homeData from "./Data/SupportData";
import Grid from "@material-ui/core/Grid";
import ProgressBar from "react-bootstrap/ProgressBar";
import UserInfo from "./SupportPageComponent/UserInfoComponent";
import ShareFb from "./ShareFb";
import Awards from "./SupportPageComponent/AwardsComponent";
import Payment from "./SupportPageComponent/PaymentComponent";
import VideoAdComponent from "./SupportPageComponent/VideoAdComponent";
import LastPayments from "./SupportPageComponent/LastPayments";
import { Divider } from "@material-ui/core";

var homeData = JSON.parse(window.localStorage.getItem('SupportData'));

const useStyles = makeStyles(theme => ({
  mobile: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  desktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  mainDiv: {
    marginTop: "80px"
  },
  root: {
    padding: theme.spacing(3, 2),
    width: "60%",
    marginTop: "25px",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  mainImg: {
    width: "100%",
    height: "300px",
    border: "2px solid #ccc",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px",
      height: "150px",
      border: "1px solid #000"
    }
  },
  title: {
    marginTop: "50px",
    fontFamily: "Georgia",
    color: "#3f51b5",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "30px"
  },
  typographyStart: {
    marginTop: "30px",
    fontFamily: "Georgia",
    color: "#3f51b5",
    textTransform: "uppercase",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px"
    }
  },
  typographyAds: {
    marginTop: "10px",
    fontFamily: "Georgia",
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  donateButton: {
    marginTop: "100px"
  },
  button: {
    marginRight: "20px",
    fontWeight: "bold",
    fontFamily: "Georgia",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px",
      marginTop: "10px"
    }
  },
  conPaper: {
    marginTop: "20px",
    marginBottom: "30px",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      width: "90%"
    }
  },
  conTitle: {
    marginLeft: "50px",
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
  con: {
    marginTop: "20px",
    fontSize: "16px",
    fontFamily: "Georgia",
    textAlign: "justify",
    marginLeft: "40px",
    marginRight: "40px",
    lineHeight: "1.8",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      marginLeft: "20px",
      marginRight: "20px"
    }
  }
}));

export default function SupportPage(props) {
  const classes = useStyles();
  var count;

  function prepareTile() {
    homeData = JSON.parse(window.localStorage.getItem('SupportData'));
    var tmpCount = 0;
    homeData.forEach(element => {
      if (element.id == props.id) {
        count=tmpCount;
      }
      tmpCount++;
    });
  }

  return (
    <div className={classes.mainDiv}>
    {prepareTile()}
      <div align="center">
        <Typography className={classes.title}>
          {homeData[count].title}
        </Typography>
      </div>
      <div className={classes.desktop}>
        <Paper className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <img
                className={classes.mainImg}
                src={homeData[count].img}
                alt={homeData[count].title}
              />
            </Grid>
            <Grid item xs={6}>
              <center>
                <Typography className={classes.typographyStart}>
                  Zebrano:{" "}
                  {(homeData[count].goal * homeData[count].value) / 100}{" "}
                  zł / {homeData[count].goal} zł
                </Typography>
              </center>

              <center>
                <Typography className={classes.typographyStart}>
                  <ProgressBar
                    striped
                    variant="success"
                    now={homeData[count].value}
                    label={`${homeData[count].value}%`}
                    className={classes.margin}
                  />
                </Typography>
              </center>

              <center>
                <div className={classes.donateButton}>
                  <VideoAdComponent></VideoAdComponent>
                  <Payment></Payment>
                </div>
              </center>

              <div>
                <center>
                  <Typography
                    className={classes.typographyAds}
                    variant="body2"
                    color="textSecondary"
                  >
                    Oglądając blok reklamowy wspierasz akcje bez konieczności
                    nadwyrężania własnego portfela :)
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
              <Typography className={classes.conTitle}>
                {homeData[count].contentTitle}
              </Typography>
              <Typography className={classes.con}>
                {homeData[count].content}
              </Typography>
              <br></br>
              <Divider light></Divider>
              <LastPayments id={props.id}></LastPayments>
            </Grid>

            <Grid item xs={4}>
              <ShareFb
                url={"https://supporter.netlify.com/supportpage/" + props.id}
              ></ShareFb>
              <UserInfo id={homeData[count].owner}></UserInfo>
              <Awards id={props.id}></Awards>
            </Grid>
          </Grid>
        </Paper>
      </div>

      <div className={classes.mobile}>
        <Paper className={classes.root}>
          <img
            className={classes.mainImg}
            src={homeData[count].img}
            alt={homeData[count].title}
          />
          <center>
            <Typography className={classes.typographyStart}>
              Zebrano:{" "}
              {(homeData[count].goal * homeData[count].value) / 100} zł /{" "}
              {homeData[count].goal} zł
            </Typography>
          </center>
          <center>
            <Typography className={classes.typographyStart}>
              <ProgressBar
                striped
                variant="success"
                now={homeData[count].value}
                label={`${homeData[count].value}%`}
                className={classes.margin}
              />
            </Typography>
          </center>
          <center>
            <VideoAdComponent></VideoAdComponent>
            <Payment></Payment>
          </center>

          <div>
            <center>
              <Typography
                className={classes.typographyAds}
                variant="body2"
                color="textSecondary"
              >
                Oglądając blok reklamowy wspierasz akcje bez konieczności
                nadwyrężania własnego portfela :)
              </Typography>
            </center>
          </div>

          <ShareFb
            url={"https://supporter.netlify.com/supportpage/" + props.id}
          ></ShareFb>
        </Paper>
        <Paper className={classes.conPaper}>
          <Typography className={classes.conTitle}>
            {homeData[count].contentTitle}
          </Typography>
          <Typography className={classes.con}>
            {homeData[count].content}
          </Typography>
          <br></br>
          <Divider light></Divider>
          <LastPayments id={props.id}></LastPayments>

          <UserInfo id={homeData[count].owner}></UserInfo>
          <Awards id={props.id}></Awards>
        </Paper>
      </div>
    </div>
  );
}

