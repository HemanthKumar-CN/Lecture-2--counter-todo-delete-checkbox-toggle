import React from "react";
import { TaskItem } from "./taskItem";

function Task() 
{

    const[query,setQuery]=React.useState("");
    const[tasks,setTasks]=React.useState(new Array);

    const handleChange=(e)=> {
        // console.log(e.target,e.target.value);
        // const value=e.target.value;
        // or
        const {value}=e.target;
        // console.log(value)
        setQuery(value)
    }

    const handleAdd=()=> {
        const payload= {
            title:query,
            status:false,
        }
        let newTasks=[...tasks,payload]
        setTasks(newTasks)
        setQuery("")

        // console.log(newTasks)
    }

    return (
        <div>

            <h1>TASKS</h1>
            <div>
                <input value={query} onChange={handleChange} placeholder="Type something" type="text" />
                <button onClick={handleAdd}>ADD</button>
            </div>

            <div>
                {
                    tasks.map((item,i) => {
                        return <TaskItem color={i % 2==0 ? "green" : "red"} {...item} />
                        // return <TaskItem title={item.title} status={item.status}/>
                    })
                    // tasks.map(item => {
                    //     return (
                    //         <div>
                    //             {item.title}
                    //         </div>
                    //     )
                    // })
                }
            </div>



        </div>
    )
}

export {Task}