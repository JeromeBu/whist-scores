import * as React from "react";
import { connect } from "react-redux";
import Layout from "src/Components/Layout";
// import Types from "Types";
import AddTodo from "../Components/AddTodo";
import TodoList from "../Components/TodoList";
import { addTodo, removeTodo, toggleTodo } from "../todosStore/actionCreator";

// interface ITodos {
//   isChecked: boolean;
//   text: string;
// }

type $TODO = any;

type State = $TODO;

type Props = $TODO;

class TodosContainer extends React.Component<Props, State> {
  state = {
    inputValue: "",
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  addTodoAndClearInput = () => {
    const { inputValue } = this.state;
    if (inputValue !== "") {
      this.props.addTodo({ text: inputValue, isChecked: false });
      this.setState({
        inputValue: "",
      });
    }
  };

  toggleItemCheck = (index: number) => {
    this.props.toggleTodo(index);
  };

  handleRemoveTodo = (index: number) => {
    this.props.removeTodo(index);
  };

  handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.which === 13 || event.keyCode === 13) {
      this.addTodoAndClearInput();
    }
  };

  render() {
    const { inputValue } = this.state;
    const { todos } = this.props;

    return (
      <Layout>
        <AddTodo
          inputValue={inputValue}
          onButtonClick={this.addTodoAndClearInput}
          onInputChange={this.handleInputChange}
          onInputKeyPress={this.handleKeyPress}
        />
        <TodoList
          items={todos}
          onItemCheck={this.toggleItemCheck}
          onItemRemove={this.handleRemoveTodo}
        />
      </Layout>
    );
  }
}

const mapStateToProps = (state: State) => ({
  todos: state.todosReducer.todos,
});

export default connect(
  mapStateToProps,
  { addTodo, removeTodo, toggleTodo },
)(TodosContainer);
