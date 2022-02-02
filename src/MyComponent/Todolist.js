import React from 'react'
import {TodoItem} from './TodoItem';
export const  Todolist=(props)=> {
  return <div className='container'>
      <h2>Todo List</h2>
      {props.todos.map((todoitems)=>{
          return <TodoItem todos={todoitems} key={todoitems.sr_no} onDelete={props.onDelete}/>
    })}
      
    </div>
}


