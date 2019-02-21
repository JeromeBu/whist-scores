import * as React from "react";
import { connect } from "react-redux";
import Layout from "src/Components/Layout";
import { RootState } from "Types";
import AddTodo from "../Components/AddTodo";
import FetchedList from "../Components/FetchedList";
import { addTodo, removeTodo, toggleTodo } from "../todosStore/actions";
import { selectTodos } from "../todosStore/selectors";
import { Button } from "@material-ui/core";

// interface ITodos {
//   isChecked: boolean;
//   text: string;
// }

type $TODO = any;

type Props = $TODO;

const FetchContainer: React.FC = (props: Props) => {
  return (
    <Layout>
      <Button>Fetch data !</Button>
      {error && <p>{error.message}</p>}
      {isLoading ? <p>Loading...</p> : <FetchedList items={todos} />}
    </Layout>
  );
};

const mapStateToProps = (state: RootState) => ({
  todos: selectFetched(state),
});

export default connect(
  mapStateToProps,
  { addTodo, removeTodo, toggleTodo },
)(FetchContainer);
