import { ActionType, getType } from "typesafe-actions";
import * as todosActions from "./actions";

export type TodosAction = ActionType<typeof todosActions>;

import { TodosState } from "./types";

const initialState: TodosState = {
  todos: [],
};

export const todosReducer = (state = initialState, action: TodosAction) => {
  switch (action.type) {
    case getType(todosActions.addTodo):
      return { ...state, todos: [...state.todos, action.payload] };
    case getType(todosActions.removeTodo):
      return { ...state, todos: state.todos.filter((_, i) => i !== action.payload) };
    case getType(todosActions.toggleTodo):
      const todos = [...state.todos];
      todos[action.payload].isChecked = !todos[action.payload].isChecked;
      return { ...state, todos };
    default:
      return state;
  }
};
