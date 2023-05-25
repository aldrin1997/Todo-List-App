import React, { useState } from "react";
function TodoForm({ onAdd }) {
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      if (value.trim()) {
        onAdd(value);
        setValue("");
      }
    };
    const handleChange = (e) => {
      setValue(e.target.value);
    };
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