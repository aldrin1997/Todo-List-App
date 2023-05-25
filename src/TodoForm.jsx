import React, { useState } from "react";
function TodoForm({ onAdd }) {
    // Create a state variable to store the input value
    const [value, setValue] = useState("");
    // Handle the form submission and call the appropriate function to add the new task to the list
    const handleSubmit = (e) => {
      e.preventDefault();
      if (value.trim()) {
        onAdd(value);
        setValue("");
      }
    };
    // Handle the input change and update the state variable
    const handleChange = (e) => {
      setValue(e.target.value);
    };
    // Return the form with an input field and a submit button to add new tasks
    return (
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          style={{ color: "black", border: "2px solid green", padding: "10px" }}
          value={value}
          onChange={handleChange}
          placeholder="Enter a new task"
        />
        <button type="submit" style={{ color: "#00b386", border: "2px solid green", padding: "10px" }}>Add</button>
      </form>
    );
  }
  
  export default TodoForm;