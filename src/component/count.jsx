import React from "react";



const Counter = () => {
    const [counter, setCounter] = React.useState(0);

    function handleDecrement(value) {

        setCounter(counter - value)
    }

    const handleIncrement= (value)=> {
        setCounter(counter+value)
    }

    var val = (counter > 0) ? 1 : 0;
    

    return (
        <div className="App">
            <h1 className="header" >Counter</h1>
            <h2>{counter}</h2>

            <button onClick={() => handleIncrement(1)}>Add</button>

            <button onClick={() => handleDecrement(val)}>Reduce</button>

        </div> 
    )
}

export {Counter}