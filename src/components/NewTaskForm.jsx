export default function NewTaskForm(props) {

  function handleSubmit(event) {
    event.preventDefault()
  
    props.onAddTask('Learn React')
  }
    return ( 
    <header className="header">
    <h1>todos</h1>
    <form onSubmit={handleSubmit}>
       <input className="new-todo" placeholder="What needs to be done?" autoFocus/> 
    </form>
    
  </header>
)}