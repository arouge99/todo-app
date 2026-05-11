export default function Task({status, description}) {

    console.log(status)

    return (
        <ul className="todo-list">
  
          <li className={status}>
            <div className="view">
              <input className="toggle" type="checkbox"/>
              <label>
                <span className="description">{description}</span>
                <span className="created">created 17 seconds ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
          </li>
  
        </ul>
    )
}