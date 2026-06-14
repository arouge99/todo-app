import { useState } from "react"
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

export default function Task({ completed, title, onToggleTask, onDeleteTask, onSaveTask, createdAt}) {

  const [editValue, setEditValue] = useState(title)
  const [isEditing, setIsEditing] = useState(false)

  console.log("task component");

  return (
        <li className={isEditing ? 'editing' : completed ? 'completed' : ''}> 
          <div className="view">
            <input 
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={onToggleTask}/>
            <label>
              <span className="description">{title}</span>
              <span className="created">
  {createdAt
    ? `created ${formatDistanceToNow(new Date(createdAt))} ago`
    : 'created unknown time ago'}
</span>
            </label>
            <button className="icon icon-edit" onClick={() =>setIsEditing(true)} ></button>
            <button className="icon icon-destroy" onClick={onDeleteTask}></button>
          </div>
          <input 
           type="text"
           className="edit"
           defaultValue={title}
           //value={editValue}
           //onChange={(event) => setEditValue(event.target.value)}
           onKeyDown={(event) => {
            if (event.key === 'Enter') {
              onSaveTask(editValue);
              setIsEditing(false);
            }
           }}/>
        </li>
  )
}

Task.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
  editing: PropTypes.bool,
}

Task.defaultProps = {
  title: '',
  completed: false,
  editing: false,
}