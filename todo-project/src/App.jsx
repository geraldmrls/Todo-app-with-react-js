
import { useState } from 'react'
import { Header } from './components/Header/Header.jsx'
import { TodoBody } from './components/SearchBar/AddTodoInput.jsx';
import './App.css'

function App() {

  const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  function getTasksCompleted() {
    return todo.filter((todoItem)=>todoItem.status === true);
  }

  return (
    <div className='todo-container'>
      <Header />
      <TodoBody todo={todo} setTodo={setTodo} getTasksCompleted={getTasksCompleted} />
    </div>
  )
}

export default App
