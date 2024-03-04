import React, { useState } from 'react'

// Hooks - https://www.youtube.com/watch?v=cF2lQ_gZeA8

// useState Hook - https://www.youtube.com/watch?v=lAW1Jmmr9hc


/* 1)Hooks are a feature in React, which allows you to use React Features without having to write a class.
   2)Hooks don't work inside classes

   Rules of Hooks:

   1) "Only Call Hooks ar the Top Level"- Don't call Hooks inside loops, conditions, or nessted functions.
   2) "Only Call Hooks from React Functions" - Call them from within React Functional Components and not just any 
                                               regular Javascript function.
*/

function Hookcounter(){
    
    const [count,setCount]=useState(0)
    
    return(
        <div>
            <h4>Below Count using Hooks Concept, Refer HookCounter.js for coding</h4>
            <button onClick={() => setCount( count+1 )} >Count {count} </button>
        </div>
    )
}

export default Hookcounter