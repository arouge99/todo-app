import { useState } from 'react'

import './App.css'
import Footer from './components/Footer'
import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'

function App() {

  const [tasks, setTasks] = useState([])
  
  function addTask(description) {
    const newTask = {
    id: Date.now(),
    description: description,
    completed: false,
    editing: false,
  }
  
    setTasks([...tasks, newTask])
  }

  function toggleTask(id) {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
  
      return task
    }))
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function editTask(id) {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, editing: !task.editing }
      }
  
      return task
    }))
  }

  function saveTask(id, newDescription) {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, description: newDescription, editing: false }
      }
  
      return task
    }))
  }

  return (
    <section id="todoapp">
      <NewTaskForm onAddTask={addTask}/>
      <TaskList   
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
        onSaveTask={saveTask}/>   
      <Footer/> 
    </section>
  )
} 

export default App