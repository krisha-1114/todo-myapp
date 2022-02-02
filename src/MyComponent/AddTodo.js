import React, { useState } from 'react'

export const AddTodo = ({addlist}) => {
    const[title,setTitle]=useState("")
    const[desc,setDesc]=useState("")

    const submit=(e)=>{
        e.preventDefault()
        if(!title || !desc)
        {
            alert("Do not leave this blank!")
        }
        
        addlist(title,desc)
    }
  return (
    <div className='container'>
<form onSubmit={submit}>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder="Enter a title" />
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Enter a description" />
  </div>

  <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
</form>
    </div>
  )
};

export default AddTodo

