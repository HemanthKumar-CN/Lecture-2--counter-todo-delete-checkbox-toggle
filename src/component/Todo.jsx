import React from 'react'
import TodoItem from './todoItem';


const Todo = () => {
    const[todos , setTodos]=React.useState([]);
    const[newTodo, setTodo]=React.useState("");

    // sample data:
    // {
    //     id:1,
    //     value:"Hello",
    //     isChecked: false,
    // }

    const handleChange= (e) => {
        setTodo(e.target.value)
    }

    // console.log(todos)
    // console.log(newTodo)

    const onDelete=(id) => {
        let newTodos=todos.filter(todo => todo.id != id)

        setTodos(newTodos)
    };

  return (
    <div>
        <h1>Todo</h1>
        <input onChange={handleChange} value={newTodo} placeholder='Enter something' type="text" />
        <button onClick={() => {
            if(newTodo.length>0)

            {
                setTodos([
                    ...todos,
                    {id: Date.now(), value: newTodo, isCompleted:false},
                ]);
            }

            
            setTodo("");
        }}>
        Add</button>
        {/* can't have useState inside map function */}
        {todos.map(todoItems=> {
            return (
                <TodoItem key={todoItems.id} todoItems={todoItems} onDelete={onDelete}/>
            )
        })} 
    </div>
  )
}

export default Todo     