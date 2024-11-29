import React from "react";

// /**
//  * TODO: implement the Task component
//  * @function Task
//  * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
//  */
// export default function Task() {}

export default function Task({ task, onDeleteTask, onToggleTask }) {
    return (
      <li>
        <input
        type="checkbox"
        value={task.status}
        onChange={() => onToggleTask(task.id)}
        />
        <span
        // style={{ textDecoration: item.packed ? "line-through" : "none"}}
        style={task.status ? { textDecoration: "line-through "} : {}}>
          {task.description}
        </span>
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </li>
    );
  }