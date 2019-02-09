export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = (text: string) => ({
  payload: { text },
  type: ADD_TODO,
});

export const removeTodo = (index: number) => ({
  payload: { index },
  type: REMOVE_TODO,
});

export const toggleTodo = (index: number) => ({
  payload: { index },
  type: TOGGLE_TODO,
});
