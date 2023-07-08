import React, { useEffect, useState } from 'react'
import "../styles/todostyle.css";
console.log("Very start");
let id = 0;
function Todo() {
  const [inpData,setInpData] = useState("");
  const [todos,setTodo] = useState([]);
  useEffect(()=>{
    console.log("Inside mount");
    let data = JSON.parse(localStorage.getItem("MyData"));
    if(data==null){
      data = [];
    }
    setTodo(data);
  },[]);

  useEffect(()=>{
    localStorage.setItem("MyData",JSON.stringify(todos));
  },[todos]);

  
  
  function addTodo(){
    
    let tmp = {}
    tmp.name = inpData;
    tmp.id = id++;
    todos.push(tmp);
    setTodo([...todos]);
    setInpData("")
  }
  function removeTodo(val){
    console.log("clicked rmove");
    setTodo(todos.filter((x)=>x.id!==val));
  }
  
  function editTodo(id){
    let editTodoItem = todos.find((ele)=>ele.id===id);
    setInpData(editTodoItem.name);
    setTodo(todos.filter((x)=>x.id!==id));
  }
  
  return (
    <div className='main-div'>
      <div className="child-div">
        <figure>
          <img src="./images/todo.svg" alt="todologo"/>
          <figcaption>Add your todo here ✌🏻</figcaption>
        </figure>
        <div className="addItems">
          <input type='text' placeholder='Add Item ✍🏻' className='form-control' onChange={(e)=>setInpData(e.target.value)} value={inpData}></input>
          <i className="fa fa-plus add-btn" onClick={addTodo}></i>
        </div>
        <div className="showItems">
          {todos.map((todo)=>{
            return (
              <div className="eachItem" key={todo.id}>
                <h3>{todo.name}</h3>
                <div className="todo-btn">
                  <i className='far fa-edit add-btn' onClick={()=>editTodo(todo.id)}></i>
                  <i className='far fa-trash-alt edit-btn' onClick={()=>removeTodo(todo.id)}></i>
                </div>
              </div>
            )
          })}
          
        </div>
        
        
        <div className="showItems">
          <button className="btn effect04" data-sm-link-text="Remove All" onClick={()=>setTodo([])}>
          <span>CHECK LIST</span>
          </button>
        </div>
      </div>
      
    </div>
  )
}
export default Todo;