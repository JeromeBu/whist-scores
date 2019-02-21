import { List, Paper } from "@material-ui/core";
import * as React from "react";
import FetchedListItem from "./FetchedListItem";

type FetchedListItemProps = React.ComponentProps<typeof FetchedListItem>;

type Props = {
  items: FetchedListItemProps[];
};

const FetchedList: React.FC<Props> = ({ items }) => (
  <Paper>
    <List>
      {items.map((item, index) => (
        <FetchedListItem {...item} key={`TodoItem.${index}`} divider={index !== items.length - 1} />
      ))}
    </List>
    )}
  </Paper>
);

export default FetchedList;
