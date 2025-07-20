import { useState, useEffect, useRef } from 'react'

const Todo = () => {
  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState({})

  const isMounted = useRef(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setTodo(data)
          setLoading(false)
          console.log(data)
        }, 3000)
      })

    return () => {
      isMounted.current = false
    }
  }, [isMounted])

  return loading ? <h3>Loading ...</h3> : <h1>{todo.title}</h1>
}

export default Todo
