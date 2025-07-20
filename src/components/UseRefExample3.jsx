import { useState } from 'react'
import Todo from './Todo'

const UseRefExample3 = () => {
  const [showTodo, setShowTodo] = useState(true)

  return (
    <div className='container mt-5'>
      {showTodo && <Todo />}
      <button
        className='btn btn-primary'
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle Todo
      </button>
    </div>
  )
}

export default UseRefExample3
