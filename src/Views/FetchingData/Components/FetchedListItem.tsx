import {
  Checkbox,
  // IconButton,
  ListItem,
  // ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
// import { DeleteOutlined } from "@material-ui/icons";
import * as React from "react";

type FetchedListItemProps = {
  divider: boolean;
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const FetchedListItem: React.FC<FetchedListItemProps> = ({ userId, id, title, completed }) => {
  return (
    <ListItem divider={divider} button onClick={onCheckBoxToggle}>
      <Checkbox checked={isChecked} /* disableRipple */ />
      <ListItemText
        primary={title}
        style={{ textDecoration: isChecked ? "line-through" : "none" }}
      />
      {/* <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={onButtonClick}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction> */}
    </ListItem>
  );
};

export default FetchedListItem;
