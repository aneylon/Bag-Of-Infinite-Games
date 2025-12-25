const TodoListItem = ({ todo, markComplete }) => {
  return (
    <div>
      <h3
        onClick={() => markComplete(todo.id)}
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
        {todo.text}
      </h3>
    </div>
  );
};

export default TodoListItem;
