import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'

// useCounter Custom Hook - https://www.youtube.com/watch?v=W3_GIiN-nuc
// Please check Counter2.js & useCounter.js

function Counter1() {
    const [count,increment,decrement,reset]=useCounter(0,1) //useCounter is custom hook not built-in hook check useCounter.js under hooks folder
  return (
    <div>
        <h3>Below Count Operations done by using custom hook useCounter, check useCounter.js, Counter1.js, Counter2.js for further</h3>
        <h2>Count={count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter1