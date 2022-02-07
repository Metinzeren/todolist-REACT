import { useState } from 'react';
import './App.css';
//components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ToastContainer} from 'react-toastify';

function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) =>{//todoları silebilmek için burda filtreledim
    setTodos(todos.filter((todo,index)=> index !== id))
  }


  return (
    <div className="App">
      <ToastContainer />
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
