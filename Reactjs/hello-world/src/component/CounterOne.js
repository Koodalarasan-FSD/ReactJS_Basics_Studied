import React,{useReducer} from "react";

// useReducer Hook - https://www.youtube.com/watch?v=cVYp4u1m6iA

/*
 useReducer is a hook that is used for state management in React
 useReducer is related to reducer functions
 useState is built using useReducer and so useReducer is most primitive one comparing to useState
 useState vs useReducer - https://www.youtube.com/watch?v=3VClygDRSsU

 useReducer(reducer,initialState)
 newState=reducer(currentState,action)'
 useReducer returns a pair of values[newState,dispatch]
 
 
 */

// useReducer(simple state & action) - https://www.youtube.com/watch?v=IHJ-TO_1nME


const initialState = 0
const reducer = (state,action) => {
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}
function CounterOne() {
    const[count,dispatch]=useReducer(reducer,initialState)
    return(
        <div>
            <h3>Below Count operation using useReducer(simple state & action), for coding check CounterOne.js</h3>
            <div>Count-{count}</div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
            
        </div>
    )
} 


export default CounterOne