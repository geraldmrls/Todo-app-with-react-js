
import "./WeeklyProgress.css"

export function WeeklyProgress() {
    return (
        <div className="weekly-progress-container">

            <h4 className="weekly-progress-title">Weekly Progress</h4>

            <div className="progress-container">
                <div className="statistic-progress-container">

                    <div className="progress-in-fraction-container">

                        <div className="fraction-container">
                            <span className="completed-count-numerator">1</span>

                            <span className="dash">/</span>

                            <span className="total-tasks-denominator">7</span>
                        </div>

                        <span className="tasks-title">tasks</span>

                    </div>

                    <div className="progress-percentage-container">
                        <span className="progress-percentage">14</span>  
                    %</div>
                </div>

                <div className="progress-bar"></div>
            </div>

            <div className="pending-completed-container">

                <div className="pending-container">
                    <span className="pending-count">6</span>
                    <span className="pending-title">PENDING</span>
                </div>

                <div className="completed-container">
                    <span className="completed-count">1</span>
                    <span className="completed-title">COMPLETED</span>
                </div>

            </div>
        </div>
    )
}