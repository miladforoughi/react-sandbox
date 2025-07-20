import React, { useState, useCallback } from 'react'

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([])

  const addTask = useCallback(() => {
    setTasks((prev) => [...prev, 'Some Task'])
  }, [setTasks])
  return (
    <div className='container mt-5'>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  )
}

const Button = React.memo(({ addTask }) => {
  console.log('Button Rendered')

  return (
    <div>
      <button className='btn btn-primary' onClick={addTask}>
        Add Task
      </button>
    </div>
  )
})

export default UseCallbackExample
