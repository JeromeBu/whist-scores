import { List, Paper } from "@material-ui/core";
import * as React from "react";
import TodoListItem, { TodoListItemProps } from "./TodoListItem";

type Props = {
  items: TodoListItemProps[];
  onItemRemove: (index: number) => void;
  onItemCheck: (index: number) => void;
};

const TodoList: React.FC<Props> = ({ items, onItemRemove, onItemCheck }) => (
  <Paper>
    <List>
      {items.map((todo, index) => (
        <TodoListItem
          {...todo}
          key={`TodoItem.${index}`}
          divider={index !== items.length - 1}
          onButtonClick={() => onItemRemove(index)}
          onCheckBoxToggle={() => onItemCheck(index)}
        />
      ))}
    </List>
  </Paper>
);

export default TodoList;
