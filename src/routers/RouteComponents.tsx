import React from "react";
import { Route, Switch } from "react-router-dom";
import RouteModel from "./RouteModel";

interface Props {
  routeModels: RouteModel[];
}

export default (props: Props) => {
  return (
    <Switch>
      {props.routeModels
        .filter((route) => route.component != null)
        .map((route, i) => {
          return (
            <Route
              key={i}
              exact
              path={`${route.url}`}
              component={() => {
                return <route.component />;
              }}
            />
          );
        })}
    </Switch>
  );
};
