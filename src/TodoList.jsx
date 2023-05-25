// TodoList component to display a list of tasks
import TodoItem from "./TodoItem";
function TodoList({ tasks, onComplete, onDelete }) {
    // Iterate over the list of tasks and render a TodoItem component for each task
    return (
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task.text}
            completed={task.completed}
            onComplete={() => onComplete(index)}
            onDelete={() => onDelete(index)}
          />
        ))}
      </ul>
    );
  }
  export default TodoList;