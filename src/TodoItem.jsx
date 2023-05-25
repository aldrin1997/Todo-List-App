function TodoItem({ task, completed, onComplete, onDelete }) {
    // Use conditional rendering to display different UI based on the task's completion status
    return (
      <li className="todo-item" style={{color:"#00b386"}}>
        {completed ? (
          <s>{task}</s>
        ) : (
          <span>{task}</span>
        )}
        <button className="complete-btn" style={{color:"#00b386"}} onClick={onComplete}>
          Complete
        </button>
        <button className="delete-btn" style={{color:"#e60000"}} onClick={onDelete}>
          Delete
        </button>
      </li>
    );
  }
  export default TodoItem;