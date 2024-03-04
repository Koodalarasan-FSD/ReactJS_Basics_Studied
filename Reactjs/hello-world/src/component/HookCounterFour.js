import React, {useState} from "react";

// useState with array - https://www.youtube.com/watch?v=RZ5wKYbOM_I

/* 
   Summary - 1) The useState hook lets you add state to functional components
           - 2) In classes, the state is always an object. With the useState hook, the state doesn't have to be an object.
           - 3) The useState hook returns an array with 2 elements. The first element is the current value of the state, 
                and the second element is a state setter function.
           - 4) New state value depends on the previous state value? You can pass a function to the setter function.
           - 5) When dealing with objects or arrays, always make sure to spread your state variable and then call the 
                setter function.

*/

function HookCounterFour(){

    const [items,setItems]=useState([])

    const addItem = () =>{
        /* Below value statement products output of random number between 1 to 10, ... are Spread operator 
        in es6 javascript used for copy items */
        setItems( [ ...items,{id:items.length, value: Math.floor( Math.random() * 10 ) + 1 } ] )
    }
    return(
        <div>
            <h4>In Below Operation using useState with array, Refer HookCounterFour.js for coding</h4>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {
                    items.map(item =>(<li key={item.id}>{item.value}</li>))
                }
            </ul>

        </div>
    )
}

export default HookCounterFour