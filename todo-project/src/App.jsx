
import { useState } from 'react'
import { Header } from './components/Header/Header.jsx'
import { AddTodoInput } from './components/SearchBar/AddTodoInput.jsx'
import { FilterTodo } from './components/FilterTodo/FilterTodo.jsx'
import { TodoList } from './components/TodoList/TodoList.jsx'
import './App.css'

function App() {

  const [todo, setTodo] = useState([]);

  return (
    <div className='todo-container'>
      <Header/>
      <AddTodoInput todo={todo} setTodo={setTodo}/>
      <FilterTodo/>
      <TodoList todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default App
