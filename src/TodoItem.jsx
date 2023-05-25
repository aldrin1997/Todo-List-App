function TodoItem({ task, completed, onComplete, onDelete }) {
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