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
      .then((data) => setTasks(data))
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
    <section class="todoapp">
      <NewTaskForm onAddTask={addTask}/>
      <TaskList   
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
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