declare module "Types" {
  import { LocationChangeAction, RouterAction } from "react-router-redux";
  import { rootReducer } from "src/store";
  import { TodosAction } from "src/Views/Todos/todosStore/reducer";
  import { StateType } from "typesafe-actions";

  type ReactRouterAction = RouterAction | LocationChangeAction;

  export type RootState = StateType<typeof rootReducer>;
  export type RootAction = ReactRouterAction | TodosAction;
}
