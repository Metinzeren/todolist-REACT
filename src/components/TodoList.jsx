import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="todo-container">
      {todos.map((todo, index) => ( //inputa girilen todoları mapleyip başka bi componente yolladım
        <TodoItem todo={todo} id={index} key={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
