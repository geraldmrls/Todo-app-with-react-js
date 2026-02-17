import "./FilterTodo.css"

export function FilterTodo(){
    return(
        <>
            <div className="filter-class">
                <input className="filter-box" type="text" placeholder="Filter Tasks"/>

                <div className="sortout-buttons-container">
                    <button className="all-button">ALL</button>
                    <button className="active-button">ACTIVE</button>
                    <button className="completed-button">COMPLETED</button>
                </div>
            </div>
        </>
    )
}