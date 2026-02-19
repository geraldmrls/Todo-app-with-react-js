
import { useState, useEffect } from "react";
import { WeeklyProgress } from "../WeeklyProgress/WeeklyProgress.jsx";
import { TodoList } from "../TodoList/TodoList.jsx";
import {FilterTodo} from "../FilterTodo/FilterTodo.jsx"
import AddImage from "../../assets/add.svg?react"
import "./AddTodoInput.css"

export function TodoBody({ todo, setTodo }) {
    const [inputValue, setInputValue] = useState("");
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todo))
    }, [todo]);

    function handleInput(event) {
        const todoValue = event.target.value;
        setInputValue(todoValue);
    }

    function handleAddButton() {
        if (inputValue.trim() === "") return;

        const newTodo = {
            id: crypto.randomUUID(),
            name: inputValue
        }

        setTodo([...todo, newTodo]);


        setInputValue("");
    }

    function pressEnterKey(event) {
        if (event.key === "Enter") {
            handleAddButton();
        }
    }
 
    return (
        <>
            <div className="add-task-container">
                <input value={inputValue} className="input-todo" type="text" placeholder="Add a new task..." onChange={handleInput} onKeyDown={pressEnterKey} />
                <AddImage alt="add-image" className="add-image" onClick={handleAddButton} />
            </div>
            <WeeklyProgress/>
            <FilterTodo />
            <TodoList todo={todo} setTodo={setTodo} />

        </>
    )
}