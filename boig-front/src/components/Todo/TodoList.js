import { useEffect } from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, markComplete }) => {
  useEffect(() => {
    console.log({ todos });
  }, [todos]);
  return (
    <div>
      <h2>Todo List</h2>
      {todos &&
        todos.map((todo, i) => (
          <TodoListItem todo={todo} key={i} markComplete={markComplete} />
        ))}
    </div>
  );
};

export default TodoList;
