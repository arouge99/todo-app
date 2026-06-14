import PropTypes from "prop-types";
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

Footer.propType = {
  activeTasksCount: PropTypes.number,
  filter: PropTypes.string,
}

Footer.defaultProps = {
  activeTasksCount: 0,
  filter: 'All', 
}