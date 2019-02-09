import { TodosActionTypes } from "./actionCreator";
import { IAction, TodosState } from "./types";

const initialState: TodosState = {
  todos: [],
};

export const todosReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case TodosActionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case TodosActionTypes.REMOVE_TODO:
      return { ...state, todos: state.todos.filter((_, i) => i !== action.payload.index) };
    case TodosActionTypes.TOGGLE_TODO:
      const todos = [...state.todos];
      todos[action.payload.index].isChecked = !todos[action.payload.index].isChecked;
      return { ...state, todos };
    default:
      return state;
  }
};
