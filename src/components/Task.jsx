import { useState } from "react"

export default function Task({ completed, description, editing, onToggleTask, onDeleteTask, onEditTask, onSaveTask}) {

  const [editValue, setEditValue] = useState(description)

  return (
        <li className={editing ? 'editing' : completed ? 'completed' : ''}> 
          <div className="view">
            <input 
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={onToggleTask}/>
            <label>
              <span className="description">{description}</span>
              <span className="created">created 17 seconds ago</span>
            </label>
            <button className="icon icon-edit" onClick={onEditTask} ></button>
            <button   className="icon icon-destroy" onClick={onDeleteTask}></button>
          </div>
          <input 
           type="text"
           className="edit"
           value={editValue}
           onChange={(event) => setEditValue(event.target.value)}
           onKeyDown={(event) => {
            if (event.key === 'Enter') {
              onSaveTask(editValue)
            }
           }}/>
        </li>
  )
}