
import dayjs from "dayjs";
import todoLogo from "../../assets/todo-logo.svg"
import "./Header.css"

export function Header() {
    const today = dayjs()
    const formattedDate = today.format("dddd, MMMM D");
    return (
        <header>
            <div className="left-section">
                <h1 className="todays-task">Today's Task</h1>
                <p className="date">{formattedDate}</p>
            </div>

            <div className="right-section">
                <img src={todoLogo} alt="logo" className="todo-logo" />
            </div>
        </header>
    )
}