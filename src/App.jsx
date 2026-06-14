import { useState, useEffect } from 'react'

import './App.css'
import Footer from './components/Footer'
import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        const tasksWithCreatedAt = data.map((task) => ({
          ...task,
          createdAt: new Date(),
        }))
        setTasks(tasksWithCreatedAt)
      })
  }, [])

  const activeTasksCount =
  tasks.filter((task) => task.completed === false).length

  const [filter, setFilter] = useState('all')
  
  function addTask(title) {
    const newTask = {
    id: Date.now(),
    title: title,
    completed: false,
    editing: false,
    createdAt: new Date(),
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

  function clearCompleted() {
    setTasks(tasks.filter((task) => !task.completed))
  }

  function saveTask(id, newDescription) {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: newDescription, }
      }
  
      return task
    }))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.completed
    }
  
    if (filter === 'completed') {
      return task.completed
    }
  
    return true
  })

  return (
    <section className="todoapp">
      <NewTaskForm onAddTask={addTask}/>
      <TaskList   
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
    
        onSaveTask={saveTask}/>   
      <Footer
      activeTasksCount={activeTasksCount}
      filter={filter}
      onFilterChange={setFilter}
      onClearCompleted={clearCompleted}/> 
    </section>
  )
} 

export default App