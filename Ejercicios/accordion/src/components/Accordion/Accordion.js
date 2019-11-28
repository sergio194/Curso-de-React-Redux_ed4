import React from 'react';
const Accordion = () => {

    const [list, setList] = React.useState([]);
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {return response.json()})
        .then((response) => setList(response));
    }
    React.useEffect(fetchTodos, []);
    return (
        <ul>
            {list.map((el, idx) => {
                // if (el.completed) {
                //     return <li key={el.id}>{el.title}</li>
                // }
                return <li key={el.id}>{el.title}</li>
            })}
        </ul>
    );
}

export { Accordion };