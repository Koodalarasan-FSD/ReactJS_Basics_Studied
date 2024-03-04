import React, { useState } from "react";

// useState with previous state - https://www.youtube.com/watch?v=d0plTCQgsXs

function HookCounterTwo(){

    const initialcount=0
    const [count, setCount] = useState(initialcount)

    const incrementfive = () =>{
        for(let i=0;i<5;i++){
            setCount(prevState=>prevState+1)
        }
    }

    return(
        <div>
            <h4>Below Count Operations using Hooks Concept - useState with previous state, Refer HookCounterTwo.js for coding</h4>
            Count:{count}
            <button onClick={() => setCount( initialcount )}>Reset</button>
            <button onClick={() => setCount( prevState => prevState + 1 )}>Increment</button>
            <button onClick={() => setCount( prevState => prevState - 1)}>Decrement</button>
            <button onClick={ incrementfive }>IncrementFive</button>
        </div>
    )
}

export default HookCounterTwo