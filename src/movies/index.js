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
import { fetchJson, filterData } from "../shared/utils";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    cursor: "pointer",
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

function Movies(props) {
  const classes = useStyles();
  const [movieLists, setmovieLists] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchMoviesList = async () => {
    let respose = await fetchJson();
    if (respose && respose.ok) {
      let json = await respose.json();
      if (json && json.hasOwnProperty("entries") && json.entries.length > 0) {
        setloading(false);
        const { entries } = json;
        setmovieLists(filterData(entries, "movie"));
      }

      console.log(json);
    }
  };

  const handleCardClick = (title) => {
    props.history.push(`/movies/${title}`);
  };
  useEffect(() => {
    fetchMoviesList();
  }, []);
  return (
    <div>
      <Container maxWidth="md">
        <Grid container alignItems="center" spacing={2}>
          {movieLists.length > 0
            ? movieLists.map((item) => {
                return (
                  <Grid item key={item.id} xs={3}>
                    <Card
                      className={classes.root}
                      onClick={() => handleCardClick(item.title)}
                    >
                      {item["images"]["Poster Art"].url ? (
                        <CardMedia
                          className={classes.media}
                          image={item["images"]["Poster Art"].url}
                          title={item.title}
                        />
                      ) : (
                        <Skeleton variant="rect" width={210} height={118} />
                      )}
                      <span className={classes.title}>{item.title}</span>
                    </Card>
                  </Grid>
                );
              })
            : loading &&
              [0, 1, 2].map((item, index) => {
                return (
                  <Box key={index} width={180} marginRight={0.5} my={2}>
                    <Skeleton variant="rect" width={180} height={118} />
                  </Box>
                );
              })}
          {!loading && movieLists.length == 0 && (
            <div style={{ width: "100%" }}>
              <Alert severity="error">Oops,somthing went wrong!</Alert>
            </div>
          )}
        </Grid>
      </Container>
    </div>
  );
}

Movies.propTypes = {};

export default Movies;
