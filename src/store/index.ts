import { combineReducers, createStore } from "redux";
import { todoReducer } from "src/Views/Todos/Containers/reducer";

export const store = createStore(
  combineReducers({
    todoReducer,
  }),
);
