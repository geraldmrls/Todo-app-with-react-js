
import { useState, useEffect, useRef } from "react"
import relativeTime from "dayjs/plugin/relativeTime"
import calendarImage from "../../assets/calendar.svg"
import EditImage from "../../assets/edit.svg?react"
import DeleteImage from "../../assets/delete.svg?react"
import Cirlce from "../../assets/circle.svg?react"
import Check from "../../assets/check.svg?react"
import "./TodoList.css"
import dayjs from "dayjs"

dayjs.extend(relativeTime);


export function TodoList({ todo, setTodo, getTasksCompleted, buttonActive }) {
    const [todoEdit, setTodoEdit] = useState(null);
    const todoContainerRef = useRef(null)
    const [, setTick] = useState(0);
    useEffect(() => {
        const containerElem = todoContainerRef.current;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    }, [todo]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTick(prev => prev + 1);
        }, 1000)
        return () => clearInterval(interval)
    }, [])


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
            name: newValue,
            updated: true
        })
    }

    function saveUpdatedTodo() {

        if (!todoEdit) return;

        const updatedTodos = todo.map(todoItem => {
            if (todoItem.id === todoEdit.id) {
                return {
                    ...todoItem,
                    name: todoEdit.name,
                    updated: true
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

    function checkTask(idToCheck) {
        const updatedTodos = todo.map(todoItem => {
            if (todoItem.id === idToCheck) {
                return {
                    ...todoItem,
                    status: !todoItem.status
                }
            }
            return todoItem;
        });
        setTodo(updatedTodos)
    }


    const tasksToShow = todo.filter(todoItem => {
        if (buttonActive === "ALL") {
            return todoItem;
        } else if (buttonActive === "ACTIVE") {
            return todoItem.status === false;
        } else if (buttonActive === "COMPLETED") {
            return todoItem.status === true;
        }
    })


    return (
        <div className="todo-items-container" ref={todoContainerRef}>
            {tasksToShow.map(todoElement => {

                return (
                    <div className="todo-value-container" key={todoElement.id}>

                        <div className="todo-added-container">

                            <div className="circle-check-contianer" onClick={() => {
                                checkTask(todoElement.id);
                                getTasksCompleted()
                            }}>
                                <Check className={`check-image ${todoElement.status === true ? "check-reveal" : ""}`} />

                                <Cirlce className={`circle-image ${todoElement.status === true ? "circle-clicked" : ""}`} />
                            </div>

                            <input type="text" className={todoEdit?.id === todoElement.id ? "show-edit-input" : "remove-edit-input"} value={todoEdit?.name || ""} onChange={updateTodo} onKeyDown={handleKeyDown} onBlur={saveUpdatedTodo} autoFocus />

                            <div className={todoEdit?.id === todoElement.id ? "remove-todo-left-side" : "todo-left-side"}>

                                <div className={todoEdit?.id === todoElement.id ? "remove-todo-name-container" : "todo-name-container"}>
                                    <span className={`todo ${todoElement.status ? "todo-crossed" : ""}`}>
                                        {todoElement.name}
                                    </span>
                                    <div className={todoEdit?.id === todoElement.id ? "remove-todo-date-container" : "todo-date-container"}>
                                        <img className="calendar-image" src={calendarImage} />
                                        <span className="todo-date-added">
                                            {todoElement.createdAt
                                                ? dayjs(todoElement.createdAt).fromNow()
                                                : "No date"}
                                        </span>
                                        <span className={todoElement.updated ? "todo-is-updated" : ""}>{`${todoElement.updated ? "· Updated" : ""}`}</span>
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