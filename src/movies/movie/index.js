import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Skeleton } from "@material-ui/lab";
import { Alert } from "@material-ui/lab";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { fetchJson, filterDataByTitle } from "../../shared/utils";
const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 250,
    // cursor: "pointer",
  },
  media: {
    height: 30,
    width: "100%",
    paddingTop: "36.25%", // 16:9
  },
  title: {
    margin: "1rem",
    fontSize: "0.8rem",
  },
}));

function Movie(props) {
  const { id } = props.match.params;
  const classes = useStyles();
  const [movie, setmovie] = useState({});
  const [loading, setloading] = useState(true);

  const fetchMoviesList = async () => {
    let respose = await fetchJson();
    if (respose && respose.ok) {
      let json = await respose.json();
      if (json && json.hasOwnProperty("entries") && json.entries.length > 0) {
        const { entries } = json;
        let movie = filterDataByTitle(entries, id);
        setmovie(movie);
        setloading(false);
      }

      console.log(json);
    }
  };
  useEffect(() => {
    fetchMoviesList();
  }, []);
  return (
    <div>
      <Container maxWidth="md">
        <Grid container alignItems="center" spacing={2}>
          {!loading && movie ? (
            <Grid item key={movie.title} xs={12}>
              <Card className={classes.root}>
                {movie["images"]["Poster Art"].url ? (
                  <CardMedia
                    className={classes.media}
                    image={movie["images"]["Poster Art"].url}
                    title={movie.title}
                  />
                ) : (
                  <Skeleton variant="rect" width={210} height={118} />
                )}
                <CardContent>
                  <div style={{ textAlign: "left" }}>
                    <span>Title:</span>
                    <span className={classes.title}>{movie.title}</span>
                  </div>

                  <div style={{ textAlign: "left" }}>
                    <span>Program Type:</span>
                    <span className={classes.title}>{movie.programType}</span>
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <span>Release Year:</span>
                    <span className={classes.title}>{movie.releaseYear}</span>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ) : (
            loading && (
              <Box width={180} marginRight={0.5} my={2}>
                <Skeleton variant="rect" width={180} height={118} />
              </Box>
            )
          )}
          {!loading && movie.length == 0 && (
            <div style={{ width: "100%" }}>
              <Alert severity="error">Oops,somthing went wrong!</Alert>
            </div>
          )}
        </Grid>
      </Container>
    </div>
  );
}

Movie.propTypes = {};

export default Movie;
