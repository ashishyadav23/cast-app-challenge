import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  trialBtn: {
    backgroundColor: "#000",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#4b4747",
    },
    [theme.breakpoints.down("md")]: {
      // display: "none",
    },
  },
  title: {
    fontSize: "1.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
}));

function Headers(props) {
  console.log("HEADER", props);
  const classes = useStyles();
  const handleHomeClick = () => {
    window.location.replace("/");
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            onClick={handleHomeClick}
            variant="h6"
            className={classes.title}
          >
            DEMO Streaming
          </Typography>
          <div className={classes.grow}></div>
          <div>
            <Button className={classes.logInBtn} color="inherit" size="small">
              Log in
            </Button>
            <Button size="small" color="inherit" className={classes.trialBtn}>
              Start your free trial
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Headers.propTypes = {};

export default Headers;
