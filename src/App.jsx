import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName name="Todo App" />
        <AddTodo />
        <div className="item-containers">
          <TodoItem title="First Todo Item" date="2024/06/15" />
          <TodoItem title="Second Todo Item" date="2025/06/15" />
          <TodoItem title="Third Todo Item" date="2025/07/15" />
        </div>
      </center>
    </>
  );
}

export default App;
