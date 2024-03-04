import {useState} from 'react'

// useCounter Custom Hook - https://www.youtube.com/watch?v=W3_GIiN-nuc
// Please check Counter1.js,Counter2.js


function useCounter(initialCount=0,value) {
    const [count,setCount]=useState(initialCount)
    const increment=()=>{
        setCount(prevCount=>prevCount+value)
    }
    const decrement=()=>{
        setCount(prevCount=>prevCount-value)
    }
    const reset=()=>{
        setCount(initialCount)
    }
    return[count,increment,decrement,reset]
}

export default useCounter