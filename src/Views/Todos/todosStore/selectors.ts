import { RootState } from "Types";

export const selectTodos = (state: RootState) => {
  return state.todosReducer.todos;
};
