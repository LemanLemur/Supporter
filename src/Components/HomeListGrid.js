import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import Typography from '@material-ui/core/Typography';

import AlarmIcon from '@material-ui/icons/Alarm';
import HealingIcon from '@material-ui/icons/Healing';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import CardTravelIcon from '@material-ui/icons/CardTravel';

import { Link } from "react-router-dom";

import 'simplebar/dist/simplebar.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'

// import tileData from './Data/SupportData';

var tileData = JSON.parse(window.localStorage.getItem('SupportData'));

const useStyles = makeStyles(theme => ({
  mobile: {
    marginBottom: '10px',
    marginTop: '10px',
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
    marginBottom: '20px',
    marginTop: '20px',
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
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10px',
    justifyContent: 'space-around',
    overflow: 'hidden',
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  typeTitle: {
    marginBottom: '20px',
    marginTop: '20px',
    fontFamily: "Georgia",
    color: "#3f51b5",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "25px",
  },
  paper:{
    padding: theme.spacing(3, 2),
    // background:  "#e9ebf9" ,
  },
  slider:{
    width: '80%',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  margin: {
    width: "100%",
    fontWeight: "bold",
    fontSize: "14px",
  }
}));

const defaultProps = {
  border: 3,
  bgcolor: 'background.paper',
  borderColor: '#3f51b5',
  m: 0,
  marginBottom: 2,
};

export default function HomeGridList(props) {
  const classes = useStyles();

  return (
    <center>
      {/* <Box borderRight={0} borderLeft={0} {...defaultProps} >
      <Paper className={classes.paper}> */}
      <Jumbotron className={classes.paper}>
    <div className={classes.root} data-simplebar>
    <Typography variant="h3" component="h3" className={classes.desktop}>
      {props.icon === 0 ? <AlarmIcon fontSize="large"/> : ""}
      {props.icon === 1 ? <HealingIcon fontSize="large"/> : ""}
      {props.icon === 2 ? <AirplanemodeActiveIcon fontSize="large"/> : ""}
      {props.icon === 3 ? <CardTravelIcon fontSize="large"/> : ""}
      {" "}{props.descryption}
      </Typography>
      
      <Typography variant="h3" component="h3" className={classes.mobile}>
      {props.icon === 0 ? <AlarmIcon fontSize="small"/> : ""}
      {props.icon === 1 ? <HealingIcon fontSize="small"/> : ""}
      {props.icon === 2 ? <AirplanemodeActiveIcon fontSize="small"/> : ""}
      {props.icon === 3 ? <CardTravelIcon fontSize="small"/> : ""}
      {" "}{props.descryption}
      </Typography>

      <GridList className={classes.gridList} cols={3.25}>
        {tileData.map(tile => (

          tile.label === props.option ?
          
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} onClick=""/>
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                 <Link to={`/supportpage/${tile.id}`}><LocalAtmOutlinedIcon className={classes.title}  fontSize="large"/></Link>
                </IconButton>
              }
              subtitle={
                <div className={classes.slider}>
                  <ProgressBar striped variant="success" now={tile.value} label={`${tile.value}%`} className={classes.margin}></ProgressBar>
               </div>
              }
            />
          </GridListTile>
          
          :
                    
          <div></div>

        ))}
      </GridList>
    </div>
    </Jumbotron>
    {/* </Paper>
    </Box> */}
    </center>
  );
}