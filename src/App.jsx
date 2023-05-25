import React, { useState } from "react";
import Card from './card'
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
function App() {
  const [tasks, setTasks] = useState([
  ]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const completeTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: true } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

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