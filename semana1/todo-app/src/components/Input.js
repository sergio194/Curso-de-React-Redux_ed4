import React from 'react';
import ReactDOM from "react-dom";

export const Input = () => {
    const [valueTask, setValueTask] = React.useState('');
    let newValueTask = () => {
        setValueTask(valueTask)
    }
    return(
        <div>
            <input type="text" value={valueTask} />
            <button onClick={newValueTask}> add </button>
           
        </div>
        
    )
}