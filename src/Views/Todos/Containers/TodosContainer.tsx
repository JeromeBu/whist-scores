import * as React from "react";
import Layout from "src/Components/Layout";
import AddTodo from "../Components/AddTodo";
import TodoList from "../Components/TodoList";
// import { connect } from "react-redux";

interface ITodos {
  isChecked: boolean;
  text: string;
}

type State = {
  inputValue: string;
  todos: ITodos[];
};

class TodosContainer extends React.Component<{}, State> {
  state = {
    inputValue: "",
    todos: [],
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  addTodoAndClearInput = () => {
    const { inputValue } = this.state;
    if (inputValue !== "") {
      this.setState(({ todos: prevTodos }) => ({
        inputValue: "",
        todos: [...prevTodos, { text: inputValue, isChecked: false }],
      }));
    }
  };

  toggleItemCheck = (index: number) => {
    this.setState(({ todos: prevTodos }) => {
      const todos = [...prevTodos];
      todos[index].isChecked = !todos[index].isChecked;
      return { todos };
    });
  };

  handleRemoveTodo = (index: number) => {
    this.setState(({ todos: prevTodos }) => {
      return { todos: prevTodos.filter((todo, i) => i !== index) };
    });
  };

  handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.which === 13 || event.keyCode === 13) {
      this.addTodoAndClearInput();
    }
  };

  render() {
    const { inputValue, todos } = this.state;

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

// const mapStateToProps = ({ todos }) => ({
//   todos,
// });

// export default connect()(TodosContainer);
export default TodosContainer;
