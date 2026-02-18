
import { useState } from 'react'
import { Header } from './components/Header/Header.jsx'
import { TodoBody } from './components/SearchBar/AddTodoInput.jsx';
import './App.css'

function App() {

  const [todo, setTodo] = useState([]);

  return (
    <div className='todo-container'>
      <Header/>
      <TodoBody todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default App
