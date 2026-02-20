
import "./WeeklyProgress.css"

export function WeeklyProgress({ todo, getTasksCompleted }) {

    const totalTasks = todo.length;
    const tasksCompleted = getTasksCompleted().length;
    const tasksPending = totalTasks - tasksCompleted;

    const percentage =
        totalTasks === 0
            ? 0
            : Math.round((tasksCompleted / totalTasks) * 100);

    return (
        <div className="weekly-progress-container">

            <h4 className="weekly-progress-title">Weekly Progress</h4>

            <div className="progress-container">
                <div className="statistic-progress-container">

                    <div className="progress-in-fraction-container">

                        <div className="fraction-container">
                            <span className="completed-count-numerator">{tasksCompleted}</span>

                            <span className="dash">/</span>

                            <span className="total-tasks-denominator">{todo.length}</span>
                        </div>

                        <span className="tasks-title">tasks</span>

                    </div>

                    <div className="progress-percentage-container">
                        <span className="progress-percentage">{percentage}</span>
                        %</div>
                </div>

                <div className="progress-bar-track">
                    <div className="progress-bar-fill" style={{width: `${percentage}%`}}></div>
                </div>
            </div>

            <div className="pending-completed-container">

                <div className="pending-container">
                    <span className="pending-count">{tasksPending}</span>
                    <span className="pending-title">PENDING</span>
                </div>

                <div className="completed-container">
                    <span className="completed-count">{tasksCompleted}</span>
                    <span className="completed-title">COMPLETED</span>
                </div>

            </div>
        </div>
    )
}