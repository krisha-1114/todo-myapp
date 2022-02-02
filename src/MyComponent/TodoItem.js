import React from 'react';

export const TodoItem=({todos,onDelete}) =>{
  return (
    <div>
      <h6>Todo Items</h6>
      <h3>{todos.sr_no}</h3>
      <h3>{todos.title}</h3>
      <h3>{todos.desc}</h3>
      <button className='btn btn-danger btm-sm' onClick={()=>onDelete(todos)}>Delete</button>
    </div>
  )
}

export default TodoItem
