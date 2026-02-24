import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'


const TodoList = () => {
  // useSelector ile store a gidip todoReducer icerisindeki yapilacaklar dizisine ulasacagiz. Ve bu diziyi map ile donerek her bir item i TodoItem componentine gonderecegiz.

  const { yapilacaklar } = useSelector((state) => state.todoReducer)

  return (
    <div>
      {yapilacaklar.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default TodoList