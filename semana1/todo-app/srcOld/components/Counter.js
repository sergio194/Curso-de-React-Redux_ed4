import React from "react"
export const Counter = () => {
    const [count, setCount] = React.useState(0);
    let increment = () => {
        setCount(count + 1)
    }
    let decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <span>{count}</span>
            <button onClick={increment}>Mas 1</button>
            <button onClick={decrement}>menos 1</button>
        </div>
    )
}
