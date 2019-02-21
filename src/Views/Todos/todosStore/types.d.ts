export type Todo = {
  isChecked: boolean;
  text: string;
};

export interface IAction {
  type: string;
  payload: any;
}

export type TodosState = {
  readonly todos: Todo[];
};

export interface IAddTodoPayload {
  text: string;
  isChecked: boolean;
}
