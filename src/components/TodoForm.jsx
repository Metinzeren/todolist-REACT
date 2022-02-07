import React, { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const TodoForm = ({ todos, setTodos }) => {
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (e) => {
    if (todoValue === "") {     //burda inputa bir şey girilmediyse eklemeyi engelledim
      toast.error("Please enter a todo!?");
    } else if (todos.includes(todoValue)) {    // burda zaten eklenmiş olan todoyu tekrar eklemeyi engelledim
      toast.error("Todo already exists!");
    } else if (todoValue.length < 3) {    //burda karakter sayısı 3'ten az olan todo eklemeyi engelledim
      toast.error("Todo must be at least 3 characters long!");
    } else {//burda girilen todoyu trimleyerek ekledim
      const newTodo = todoValue.trim();
      setTodos([...todos, newTodo]);
      toast.success("Todo added");
    }
  };

  return (
    <form action="" id="form">
      <input
        type="text"
        id="todo-input"
        value={todoValue}
        placeholder="Please enter todos"
        onChange={(e) => setTodoValue(e.target.value)}   //inputa girilen değeri statte tuttum
      />
      <button
        className="todo-btn"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();  //ekleme engelleme işlerini bi fonksiyona atayıp burda çağırdım
          setTodoValue("");  //todo ekledikten sonra inputu boşalttım
        }} 
      >
        <i class="fas fa-plus"></i>
      </button>
    </form>
  );
};
export default TodoForm;
