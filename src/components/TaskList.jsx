import Task from "./Task"

export default function TaskList ({tasks}) {
    return (
    <ul className="todo-list">
        {tasks.map((task, index) => (
  <Task
    key={index}
    description={task}
  />
))}
    </ul>
    )
}