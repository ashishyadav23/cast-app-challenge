import React from "react";
import {
  AppBar,
  Grid,
  IconButton,
  Link,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "150px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    flexGrow: 1,
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor: "#393939",
    color: "#fff",
  },
  sectionSpacing: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  linkList: {
    listStyle: "none",
    "& li": {
      display: "inline",
      padding: "0 10px",
      borderLeft: "solid 1px white",
      "& a": {
        color: "#fff",
      },
    },
  },
  "@global": {
    "li:first-child": {
      borderLeft: "none",
    },
  },
}));
function Footers(props) {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root} id="footer">
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container>
            <Grid item xs={12}>
              <div>
                <ul className={classes.linkList}>
                  <li>
                    <Link href="#" onClick={preventDefault}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={preventDefault}>
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={preventDefault}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={preventDefault}>
                      Collection Statement
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={preventDefault}>
                      Help
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={preventDefault}>
                      Manage Account
                    </Link>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12}>
              <footer>
                {" "}
                Copyright &copy; 2016 DEMO Streaming. All Rights Reserved
              </footer>
            </Grid>
            <Grid item xs={12}>
              <IconButton aria-label="search" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="search" color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="search" color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="search" color="inherit">
                <img
                  width={80}
                  src={
                    "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/assets/store/app-store.svg"
                  }
                  alt={"App Store"}
                ></img>
              </IconButton>
              <IconButton aria-label="search" color="inherit">
                <img
                  width={80}
                  src={
                    "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/assets/store/app-store.svg"
                  }
                  alt={"App Store"}
                ></img>
              </IconButton>
              <IconButton aria-label="search" color="inherit">
                <img
                  width={80}
                  src={
                    "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/assets/store/windows-store.svg"
                  }
                  alt={"Windows Store"}
                ></img>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Footers;
