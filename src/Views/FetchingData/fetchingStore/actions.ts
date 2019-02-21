import { createAction } from "typesafe-actions";
import { Todo } from "./types";

export const addTodo = createAction("ADD_TODO", resolve => {
  return (text: string) => resolve({ text, isChecked: false } as Todo);
});

export const removeTodo = createAction("REMOVE_TODO", resolve => {
  return (index: number) => resolve(index);
});

export const toggleTodo = createAction("TOGGLE_TODO", resolve => {
  return (index: number) => resolve(index);
});
