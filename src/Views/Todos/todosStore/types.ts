export interface ITodos {
  isChecked: boolean;
  text: string;
}

export interface IAction {
  type: string;
  payload: any;
}

export type TodosState = {
  readonly todos: ITodos[];
};

export interface IAddTodoPayload {
  text: string;
  isChecked: boolean;
}
