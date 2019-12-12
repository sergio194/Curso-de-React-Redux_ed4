import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Task.css'

const Task = ({
  removeTask = () => {},
  children = "",
  onInpChange = () => {},
  className = "",
  checked = false,
}) => {

  // const isTaskCompleted = checked ? 'td-task-wrapper--check' : 'td-task-wrapper--noCheck'
  const isTaskCompleted = checked ? {
    backgroundColor: "lightgreen"
  } : {
    backgroundColor: "tomato"
  }

return (
  <div className="td-task-wrapper" style={isTaskCompleted}>
    <input
      className="td-task-input"
      type="checkbox"
      id={children}
      checked={checked}
      onChange={onInpChange}
    />
    <label
      onClick={onInpChange}
      htmlFor={children}
      className="td-list_task"
    >
      {children}
    </label>
    <button
      onClick={(event) => removeTask(event)}
      className="td-remove_task">
        x
    </button>
  </div>
)};

// podemos validar el tipo de las props con esta librería
Task.propTypes = {
  removeTask: PropTypes.func,
  children: PropTypes.string,
  onInpChange: PropTypes.func,
  checked: PropTypes.bool,
  className: PropTypes.string
}
export { Task };
