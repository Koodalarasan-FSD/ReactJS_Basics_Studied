import React,{useReducer} from "react";

// useReducer Hook - https://www.youtube.com/watch?v=cVYp4u1m6iA

/*
 useReducer is a hook that is used for state management in React
 useReducer is related to reducer functions
 useState is built using useReducer and so useReducer is most primitive one comparing to useState

 useReducer(reducer,initialState)
 newState=reducer(currentState,action)'
 useReducer returns a pair of values[newState,dispatch]
 */

// useReducer(complex state & action) - https://www.youtube.com/watch?v=uX7lxFrWUbA


const initialState = {
    firstCounter:0
}

const reducer = (state,action) => {
    switch(action.type){
        case 'increment':
            return {firstCounter:state.firstCounter + action.value}
        case 'decrement':
            return {firstCounter:state.firstCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}
function CounterTwo() {
    const[count,dispatch]=useReducer(reducer,initialState)
    return(
        <div>
            <h3>Below Count operation using useReducer(complex state & action), for coding check CounterTwo.js</h3>
            <div>Count - {count.firstCounter}</div>
            <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'increment',value:5})}>Increment 5</button>
            <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement 5</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            
        </div>
    )
} 


export default CounterTwo