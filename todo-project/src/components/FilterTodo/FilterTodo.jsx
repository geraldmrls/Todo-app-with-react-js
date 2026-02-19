
import { useState } from "react"
import "./FilterTodo.css"

export function FilterTodo(){
    const [buttonActive, setButtonActive] = useState("ALL");

    function handleClick(event){
        const buttonTextContent = event.target.textContent;
        setButtonActive(buttonTextContent)
    }

    return(
        <>
            <div className="filter-class">
                <input className="filter-box" type="text" placeholder="Filter Tasks"/>

                <div className="sortout-buttons-container">

                    <button className={`${buttonActive==="ALL" ? "clicked-button" : ""} all-button`} onClick={handleClick}>ALL</button>

                    <button className={`${buttonActive==="ACTIVE" ? "clicked-button" : ""} active-button  `} onClick={handleClick}>ACTIVE</button>

                    <button className={`${buttonActive==="COMPLETED" ? "clicked-button" : ""} completed-button `} onClick={handleClick}>COMPLETED</button>
                </div>
            </div>
        </> 
    )
}