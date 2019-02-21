import * as React from "react";
import FetchingData from "./Views/FetchingData";
import Home from "./Views/Home";
import Players from "./Views/Players";
import Rules from "./Views/Rules";
import Todos from "./Views/Todos";

export type RouteShape = {
  component: React.ComponentClass<any, any> | React.FC<any> | undefined;
  exact?: boolean;
  path: string;
};

function routesKeepingTypes<T extends { [key: string]: RouteShape }>(arg: T): T {
  return arg;
}

// tslint:disable:object-literal-sort-keys
const ROUTES = routesKeepingTypes({
  HOME: {
    component: Home,
    exact: true,
    path: "/",
  },
  PLAYERS: {
    component: Players,
    path: "/players",
  },
  RULES: {
    component: Rules,
    path: "/rules",
  },
  TODOS: {
    component: Todos,
    path: "/todos",
  },
  FETCHING_DATA: {
    component: FetchingData,
    path: "/fetching-data",
  },
});
// tslint:enable:object-literal-sort-keys

export default ROUTES;
