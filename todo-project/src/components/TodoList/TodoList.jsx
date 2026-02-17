
import calendarImage from "../../assets/calendar.svg"
import editImage from "../../assets/edit.svg"
import deleteImage from "../../assets/delete.svg"
import "./TodoList.css"

export function TodoList({ todo, setTodo }) {

    if (!todo) return null;

    function deleteTodo(idToDelete){
        setTodo(todo.filter(item=>{
            return item.id !== idToDelete;
        }))
    }

    return (
        <>
            {todo.map(todoElement => {
                return (
                    <div className="todo-value-container" key={todoElement.id}>
                        <div className="todo-left-side">
                            <input className="radio-input" type="radio" />

                            <div className="todo-name-container">
                                <span className="todo">
                                    {todoElement.name}
                                </span>
                                <div className="todo-date-container">
                                    <img className="calendar-image" src={calendarImage} />
                                    <span className="todo-date-added">
                                        2/16/2026
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="todo-right-side">
                            <img className="edit-image" src={editImage} />
                            <img className="delete-image" src={deleteImage} onClick={()=>{
                                deleteTodo(todoElement.id)
                            }}/>
                        </div>
                    </div>
                )
            })}

        </>
    )
}