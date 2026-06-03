import TasksFilter from "./TasksFilter";

export default function Footer ({activeTasksCount, filter, onFilterChange, onClearCompleted}) {
    return (
    <footer className="footer">
        <span className="todo-count">
          {activeTasksCount} items left
        </span>
        <TasksFilter
        filter={filter} 
        onFilterChange={onFilterChange}/>
        <button 
        className="clear-completed"
        onClick={onClearCompleted}>
          Clear completed
        </button>
      </footer>
      )
}