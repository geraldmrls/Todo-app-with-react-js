
import { useState, useEffect, useRef } from "react"
import calendarImage from "../../assets/calendar.svg"
import EditImage from "../../assets/edit.svg?react"
import DeleteImage from "../../assets/delete.svg?react"
import "./TodoList.css"

export function TodoList({ todo, setTodo }) {
    const [todoEdit, setTodoEdit] = useState(null);
    const todoContainerRef = useRef(null)
    useEffect(() => {
        console.log("todo added");
        const containerElem = todoContainerRef.current;
        if(containerElem){
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    }, [todo]);

    if (!todo) return null;

    function deleteTodoButton(idToDelete) {
        setTodo(todo.filter(todoItem => {
            return todoItem.id !== idToDelete
        }))
    }

    function editTodoButton(idToEdit) {
        const selectedTodo = todo.find(todoItem => {
            return todoItem.id === idToEdit
        });
        setTodoEdit(selectedTodo);
    }

    function updateTodo(event) {
        const newValue = event.target.value;
        setTodoEdit({
            ...todoEdit,
            name: newValue
        })
    }

    function saveUpdatedTodo() {

        console.log(todoEdit.name)

        const updatedTodos = todo.map(todoItem => {
            if (todoItem.id === todoEdit.id) {
                return {
                    ...todoItem,
                    name: todoEdit.name
                }
            }
            return todoItem;
        });

        setTodo(updatedTodos)
        setTodoEdit(null)
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            saveUpdatedTodo()
        }
    }



    return (
        <div className="todo-items-container" ref={todoContainerRef}>
            {todo.map(todoElement => {
                return (
                    <div className="todo-value-container" key={todoElement.id}>

                        <div className="todo-added-container">
                            <input className="radio-input" name="todo" type="radio" />

                            <input type="text" className={todoEdit?.id === todoElement.id ? "show-edit-input" : "remove-edit-input"} value={todoEdit?.name || ""} onChange={updateTodo} onKeyDown={handleKeyDown} onBlur={saveUpdatedTodo} autoFocus />

                            <div className={todoEdit?.id === todoElement.id ? "remove-todo-left-side" : "todo-left-side"}>

                                <div className={todoEdit?.id === todoElement.id ? "remove-todo-name-container" : "todo-name-container"}>
                                    <span className="todo">
                                        {todoElement.name}
                                    </span>
                                    <div className={todoEdit?.id === todoElement.id ? "remove-todo-date-container" : "todo-date-container"}>
                                        <img className="calendar-image" src={calendarImage} />
                                        <span className="todo-date-added">
                                            2/16/2026
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="todo-right-side">



                            <EditImage className="edit-image" onClick={() => {
                                editTodoButton(todoElement.id)
                            }} />
                            <div className="edit-image-cirlce"></div>

                            <DeleteImage className="delete-image" onClick={() => {
                                deleteTodoButton(todoElement.id)
                            }} />
                            <div className="delete-image-circle"></div>

                        </div>
                    </div>
                )
            })}

        </div>
    )
}