import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'

// useCounter Custom Hook - https://www.youtube.com/watch?v=W3_GIiN-nuc
// Please check Counter1.js & useCounter.js


function Counter2() {
    const [count,increment,decrement,reset]=useCounter(0,10) //useCounter is custom hook not built-in hook check useCounter.js under hooks folder
  return (
    <div>
        <h2>Count={count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter2