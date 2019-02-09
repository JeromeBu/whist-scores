import { IAddTodoPayload } from "./types";

export enum TodosActionTypes {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

export const addTodo = (payload: IAddTodoPayload) => ({
  payload,
  type: TodosActionTypes.ADD_TODO,
});

export const removeTodo = (index: number) => ({
  payload: { index },
  type: TodosActionTypes.REMOVE_TODO,
});

export const toggleTodo = (index: number) => ({
  payload: { index },
  type: TodosActionTypes.TOGGLE_TODO,
});
