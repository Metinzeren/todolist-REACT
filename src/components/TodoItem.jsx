import React from "react";
import { toast } from "react-toastify";
const TodoItem = ({ todo, deleteTodo, id }) => {
  return (
    <div className="todo-item">
      <p>{todo}</p>
      <i
        class="fas fa-trash"
        onClick={() => {
          deleteTodo(id);
          toast.warning("todo deleted");
        }}
      ></i>
    </div>
  );
};

export default TodoItem;
