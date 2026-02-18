
import { useState } from "react";
import { TodoList } from "../TodoList/TodoList.jsx";
import {FilterTodo} from "../FilterTodo/FilterTodo.jsx"
import AddImage from "../../assets/add.svg?react"
import "./AddTodoInput.css"

export function TodoBody({ todo, setTodo }) {
    const [inputValue, setInputValue] = useState("");

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


        console.log([...todo, newTodo]); // shows updated array in console
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
            <FilterTodo />
            <TodoList todo={todo} setTodo={setTodo} />

        </>
    )
}