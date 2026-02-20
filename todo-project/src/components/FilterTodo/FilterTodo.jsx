
import {useEffect } from "react"
import SearchIcon from "../../assets/search.svg?react"
import "./FilterTodo.css"

export function FilterTodo({ buttonActive, setButtonActive, setFilterInput }){

    function handleChange(event){
        const filterInputValue = event.target.value;
        setFilterInput(filterInputValue);
    }

    useEffect(()=>{
        localStorage.setItem("clicked-button", JSON.stringify(buttonActive));
    }, [buttonActive])


    function handleClick(event){
        const buttonTextContent = event.target.textContent;
        setButtonActive(buttonTextContent)
    }

    return(
        <>
            <div className="filter-container">
                
                <div className="filter-box-container">
                    <input className="filter-box" type="text" placeholder="Filter Tasks" onChange={handleChange}/>
                    <SearchIcon className={"search-icon"}/>

                </div>

                <div className="sortout-buttons-container">

                    <button className={`${buttonActive==="ALL" ? "clicked-button" : ""} all-button`} onClick={handleClick}>ALL</button>

                    <button className={`${buttonActive==="ACTIVE" ? "clicked-button" : ""} active-button  `} onClick={handleClick}>ACTIVE</button>

                    <button className={`${buttonActive==="COMPLETED" ? "clicked-button" : ""} completed-button `} onClick={handleClick}>COMPLETED</button>
                </div>
            </div>
        </> 
    )
}