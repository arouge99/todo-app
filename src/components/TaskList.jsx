import Task from "./Task"

export default function TaskList({ tasks, onToggleTask, onDeleteTask, onEditTask, onSaveTask}) {


    return (
    <ul className="todo-list">
        {tasks.map((task) => (
  <Task
    key={task.id}
    description={task.description}
    completed={task.completed}
    onToggleTask={() => onToggleTask(task.id)}
    onDeleteTask={() => onDeleteTask(task.id)}
    onEditTask={() => onEditTask(task.id)}
    editing={task.editing}
    onSaveTask={(newDescription) => onSaveTask(task.id, newDescription)}
  />
))}
    </ul>
    )
}