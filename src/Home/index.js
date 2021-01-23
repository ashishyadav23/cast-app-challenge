import React from "react";
import PropTypes from "prop-types";
import series from "../assets/series.svg";
import movies from "../assets/movies.svg";

import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 30,
    width: "100%",
    paddingTop: "36.25%", // 16:9
  },
}));

const list = [
  {
    id: 1,
    label: "Popluar Series",
    path: "/series",
    icon: series,
  },
  {
    id: 2,
    label: "Popular Movies",
    path: "/movies",
    icon: movies,
  },
];

function Home(props) {
  const classes = useStyles();
  const handleCardClick = (path) => {
    props.history.push(`${path}`);
  };
  return (
    <div>
      <Container maxWidth="sm">
        <Grid container alignItems="center" spacing={2}>
          {list.map((item) => {
            return (
              <Grid item key={item.id} xs={6}>
                <Card
                  className={classes.root}
                  onClick={() => handleCardClick(item.path)}
                >
                  <CardMedia
                    className={classes.media}
                    image={item.icon}
                    title={item.label}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

Home.propTypes = {};

export default Home;
