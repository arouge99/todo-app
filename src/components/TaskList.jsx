import Task from "./Task"

export default function TaskList () {
    return (
    <ul className="todo-list">
        <Task status="completed" description={"Learn React"}/>
    </ul>
    )
}