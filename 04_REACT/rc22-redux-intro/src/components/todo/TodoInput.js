import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { post } from '../../redux/actions/todoActions'

const TodoInput = () => {

  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(post(input))
    setInput('')
  }

  return (
    <form>
      <input className='todo-input' 
             type="text" 
             placeholder='Todo Giriniz' 
             value={input} 
             onChange={(e) => setInput(e.target.value)}
      />
      <button className='add-button' type="submit">Ekle</button>
    </form>
  )
}

export default TodoInput