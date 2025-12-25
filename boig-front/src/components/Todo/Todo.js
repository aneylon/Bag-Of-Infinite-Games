import { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const addTodo = () => {
    setTodos([
      ...todos,
      { text: newTodo, completed: false, id: todos.length + 1 },
    ]);
    setNewTodo("");
  };
  const markComplete = (id) => {
    console.log(id);
    // Todo : how to update item.
  };
  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        name="newTodo"
        id="newTodo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>add new todo</button>
      <TodoList todos={todos} markComplete={markComplete} />
    </div>
  );
};

export default Todo;
