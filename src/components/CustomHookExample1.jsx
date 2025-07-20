import React from 'react'
import useFetch from './hooks/useFetch'

const CustomHookExample1 = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  )

  if (loading) {
    return <h3>Loading ...</h3>
  }

  return (
    <div className='container mt-3'>
      <ol>
        {data.map((post) => (
          <li className='my-2' key={post.id}>
            {post.title}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default CustomHookExample1
