import {useState} from 'react'

export default function NewTaskForm(props) {

  const [value, setValue] = useState('')

  function handleSubmit(event) {
    if (event.key === "Enter") {
      props.onAddTask(value)
      setValue('')
    }
  }
    return ( 
    <header className="header">
    <h1>todos</h1>
    <input className="new-todo" placeholder="What needs to be done?" 
    onKeyDown={handleSubmit} 
    value={value}
    onChange={(event) => setValue(event.target.value)}
    autoFocus/> 
    
  </header>
)}