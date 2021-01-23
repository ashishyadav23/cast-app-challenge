import Home from "../Home";
import Movies from "../movies";
import Series from "../series";
import Serie from "../series/serie";
import Movie from "../movies/movie";
import { Route, Switch } from "react-router-dom";
const routes = [
  {
    id: 1,
    route: "/",
    component: Home,
    exact: true,
  },
  {
    id: 2,
    route: "/movies",
    component: Movies,
    exact: true,
  },
  {
    id: 3,
    route: "/movies/:id",
    component: Movie,
    exact: true,
  },
  {
    id: 4,
    route: "/series",
    component: Series,
    exact: true,
  },
  {
    id: 4,
    route: "/series/:id",
    component: Serie,
    exact: true,
  },
];

const CastRoutes = (_) => {
  return (
    <Switch>
      {routes.map((item) => {
        return (
          <Route
            key={item.id}
            exact={item.exact || false}
            path={item.route}
            component={item.component}
          />
        );
      })}
    </Switch>
  );
};

export default CastRoutes;
