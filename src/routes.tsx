import * as React from "react";
import Home from "./Views/Home";
import Players from "./Views/Players";
import Rules from "./Views/Rules";
import Todos from "./Views/Todos";

export type RouteShape = {
  component: React.ComponentClass<any, any> | React.FC<any> | undefined;
  exact?: boolean;
  path: string;
};

function routeKeepingTypes<T extends { [key: string]: RouteShape }>(arg: T): T {
  return arg;
}

const ROUTES = routeKeepingTypes({
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
});

export default ROUTES;
