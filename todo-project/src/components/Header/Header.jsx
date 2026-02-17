
import todoLogo from "../../assets/todo-logo.svg"
import "./Header.css"

export function Header() {
    return (
        <header>
            <div className="left-section">
                <h1 className="todays-task">Today's Task</h1>
                <p className="date">Monday, February 16</p>
            </div>

            <div className="right-section">
                <img src={todoLogo} alt="logo" className="todo-logo" />
            </div>
        </header>
    )
}