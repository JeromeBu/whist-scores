import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionCreator";

interface ITodos {
  isChecked: boolean;
  text: string;
}

interface IAction {
  type: string;
  payload: any;
}

type State = {
  todos: ITodos[];
};

const initialState: State = {
  todos: [],
};

export const todoReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return state + action.payload;
    case TOGGLE_TODO:
      return state + action.payload;
    default:
      return state;
  }
};
