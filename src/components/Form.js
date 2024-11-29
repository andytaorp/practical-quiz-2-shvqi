import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  function handleChange(e) {
    setDescription(e.target.value);
  }

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault(); // Prevents the default behaviour of the form - Prevents browser from reloading


    // If the descripiton is empty, don't need to create a new item
    // When the description is empthy, you don't want empty description objects to be made and populated in the list
    if (!description) return;
  
    // Creates a new JavaScript object
      const newTask = {
        id: Date.now(),
        description,
        status: false,
      }
  
    onAddTask(newTask); // Call the function that was passed in as a prop
 
    setDescription("");
    }

    return (
      <form className="add-form" onSubmit={handleSubmit}>
      <input
      type="text"
      placeholder="New Task"
      value={description}
      onChange={handleChange}
      />
      <button type="Add Task">Add Task</button>
      </form>
    );
}