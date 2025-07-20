import React, { useRef } from 'react'

const UseRefExample1 = () => {
  const inputRef = useRef()
  const paraRef = useRef()
  const onSubmit = (e) => {
    e.preventDefault()
    inputRef.current.value = 'Milad Foroughi'
    inputRef.current.style.color = '#fff'
    inputRef.current.style.background = '#000'
    paraRef.current.innerText = 'GoodBy'
    paraRef.current.style.color = '#fff'
    paraRef.current.style.background = '#f00'
    console.log(inputRef.current.value)
    console.log(paraRef.current.innerText)
  }

  return (
    <div className='container'>
      <form>
        <label htmlFor='name'>Name</label>
        <input
          ref={inputRef}
          type='text'
          id='name'
          className='form-control mb-2'
        />
        <button type='submit' onClick={onSubmit} className='btn btn-primary'>
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello
        </p>
      </form>
    </div>
  )
}

export default UseRefExample1
