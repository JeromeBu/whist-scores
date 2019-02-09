import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import * as React from "react";

export type TodoListItemProps = {
  divider: boolean;
  isChecked: boolean;
  onCheckBoxToggle: () => void;
  onButtonClick: () => void;
  text: () => void;
};

const TodoListItem: React.FC<TodoListItemProps> = ({
  divider,
  isChecked,
  onCheckBoxToggle,
  text,
  onButtonClick,
}) => {
  return (
    <ListItem divider={divider} button onClick={onCheckBoxToggle}>
      <Checkbox checked={isChecked} /* disableRipple */ />
      <ListItemText
        primary={text}
        style={{ textDecoration: isChecked ? "line-through" : "none" }}
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={onButtonClick}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoListItem;
