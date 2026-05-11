import { useState } from 'react'

import './App.css'
import Footer from './components/Footer'
import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'

function App() {

  const [tasks, setTasks] = useState([])
  
  function addTask(newTask) {
  setTasks([...tasks, newTask])
  }

  return (
    <section id="todoapp">
      <NewTaskForm onAddTask={addTask}/>
      <TaskList tasks={tasks}/>   
      <Footer/> 
    </section>
  )
} 

export default App