import React from 'react'
import styles from "./todo.module.css"

const TodoItem = ({todoItems,onDelete}) => {
    const [isCompleted,setIsCompleted]=React.useState(todoItems.isCompleted)
  return (
    <div key={todoItems.id} style={isCompleted ? {color:"red"}: {color:"green"}}>{`${todoItems.value}-${todoItems.id}`}
                <span><input type="checkbox" checked={isCompleted}  onChange={(e)=> {
                    setIsCompleted(e.target.checked)
                    // console.log(e.target.checked)
                    
                }} /></span>
                <button onClick={()=> onDelete(todoItems.id)}>Delete</button>
                {/* {console.log(isCompleted)} */}
                </div>
  )
}
export default TodoItem