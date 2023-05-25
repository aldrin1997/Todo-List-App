import React, { useState } from "react";
import Card from './card'
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
function App() {
  // Use useState to manage the list of tasks as the component's state
  const [tasks, setTasks] = useState([
  ]);

  // Create functions for adding a task, completing a task, and deleting a task using the setState function

  // Add a new task to the list
  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  // Mark a task as completed
  const completeTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: true } : task
      )
    );
  };

  // Delete a task from the list
  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  // Pass the task list and the necessary functions as props to the TodoList component
  return (
    <Card>
      <div className="App">
        <h1 style={{ textAlign: "center", color: "#00b386" }}>ToDo List App</h1>
        <TodoForm onAdd={addTask} />
        <TodoList tasks={tasks} onComplete={completeTask} onDelete={deleteTask} />
      </div>
    </Card>
  );
}

export default App;