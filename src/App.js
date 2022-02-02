import React, {useState} from 'react';
import {AddTodo} from './MyComponent/AddTodo';
import {Footer} from './MyComponent/Footer';
import {Header} from './MyComponent/Header';
import {Todolist} from './MyComponent/Todolist';


function App() {
  const onDelete=(todo)=>{
    console.log("I am Deleted!"+todo)
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
    
  }
  const addlist=(title,desc)=>{
    console.log("New Post Added!"+title+desc)

    let sr_no=todos[todos.length-1].sr_no+1
    const myTodo={
      sr_no:sr_no,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo)
  }

  const [todos,setTodos]=useState([
    {
      sr_no:1,
      title:"Learn React",
      desc:"Please practice Reactjs and watch the recordings"
    },
    {
      sr_no:2,
      title:"Microservice",
      desc:"Go through and understand the microservice architecture"
    },
  ])
  return (
    <div>
    <Header title="My Todo List" searchBar={true}/>
    <AddTodo addlist={addlist}/>
    <Todolist todos={todos} onDelete={onDelete}/>
    <Footer/> 
    </div>
  );
}

export default App;
