import React from 'react';
import ok from '../../assets/ok.png';
import deleteIcon from '../../assets/delete.png';
import { useDispatch } from 'react-redux';
import { change, remove } from '../../redux/actions/todoActions';

const TodoItem = ({ item }) => {
  // console.log(item);

  const dispatch = useDispatch();
  return (
    <div
      style={{
        background: item.completed ? 'Lightgray' : 'orange',
        textDecoration: item.completed ? 'line-through' : 'none',
        borderRadius: '10px',
      }}
      className="todo-list"
    >
      <h2 className="todo-Text">{item.todo}</h2>
      <div>
        <span>
          <img className="ok-logo" src={ok} alt="todo item" 
               onClick={()=>dispatch(change(item.id))}
          />
        </span>

        <span>
          <img className="delete-logo" src={deleteIcon} alt="todo item"
               onClick={()=>dispatch(remove(item.id))}
           />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
