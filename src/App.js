import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Counter } from './component/count';
import { Task } from './component/task';
import Todo from './component/Todo';


function App() {
  // const [counter,setCounter]= React.useState(0)

  // --------------------------------------
  // destructuring since above useState return an array- [value,setvalue(function to update the value)]

  // -------------------------------------------
  // const handleIncrement= (value)=> {
  //     setCounter(counter+value)
  // }
  // const handleDecrement= (value)=> {
  //     setCounter(counter-value)
  // }

  // function handleDecrement(value)
  // {

  //   setCounter(counter-value)
  // }

  // var val=(counter>0) ? 1 : 0;
  const [toggle,setToggle]=React.useState(false);

  const [sh, setSh]=React.useState(false);

  const [isAuth, setIsAuth]=React.useState(false);

  const handleLogin=()=> {
    setIsAuth(true)
    }

const handleLogout=()=> {
  setIsAuth(false)
}
    if(!isAuth)
    {
      return (
        <div>
          User is not Logged in, Please
          <button onClick={handleLogin}>
            Login 
          </button>
        </div>
      )
    }
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      

      {/* <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={()=>handleIncrement(1)}>Add</button>
      
      <button onClick={()=>handleDecrement(val)}>Reduce</button> */}

      <button onClick={()=> setToggle(!toggle)}>Toggle</button>
      <button onClick={handleLogout}>LogOut</button>
      {toggle ? <Counter/> : <Todo/>}

       {/* <Counter/> */}
       {<br/>}
       {<hr/>}
       {<br/>}
       {<br/>}
       {<br/>}
       <button onClick={()=> setSh(!sh)}>
       {sh ? "Hide" : "Show"}
       </button>
{/* ------------------------Two ways----------------------------------------------- */}
       {/* {sh ? <Task/> : null } */}

              {/* or  */}

              {/* {sh && <Task/>} */}

              {sh || <Task/>}   
{/* if true then it stops if false goes to task, it works in opposite to &&  */}
               
{/* --------------------------------------------------------------------------------- */}
<hr/>




<Task/>
       
    


    </div>
  );
}

export default App;
