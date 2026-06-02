import TasksFilter from "./TasksFilter";

export default function Footer ({activeTasksCount}) {
    return (
    <footer className="footer">
        <span className="todo-count">
          {activeTasksCount} items left
        </span>
        <TasksFilter/>
        <button className="clear-completed">Clear completed</button>
      </footer>
      )
}