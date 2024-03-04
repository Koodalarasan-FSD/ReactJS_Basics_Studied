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

// Multiple useReducers - https://www.youtube.com/watch?v=5DsCKNRA8s4


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
function CounterThree() {
    const[count,dispatch]=useReducer(reducer,initialState)
    const[countTwo,dispatchTwo]=useReducer(reducer,initialState)
    return(
        <div>
            <h3>Below Multiple Count operations using Multiple useReducer, for coding check CounterThree.js</h3>
            <div>Count-{count}</div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
            <div>
                <div>CountTwo-{countTwo}</div>
                <button onClick={()=>dispatchTwo('increment')}>Increment</button>
                <button onClick={()=>dispatchTwo('decrement')}>Decrement</button>
                <button onClick={()=>dispatchTwo('reset')}>Reset</button>
            </div>
        </div>
    )
} 


export default CounterThree