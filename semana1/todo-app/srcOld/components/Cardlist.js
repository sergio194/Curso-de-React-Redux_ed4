import React from "react";
export const Cardlist = ({ name, titleTask }) => {
    let addTask = () => {
        
    }
    return (
        <div>
            <header>
                <h2>{name}</h2>
                <input type="text" value={titleTask}></input>
                <button onClick={addTask}>Add</button>
            </header>
            <ul id="list">

            </ul>
        </div>
    )
}